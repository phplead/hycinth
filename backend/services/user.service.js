const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const db = require('./../_helpers/db');
var nodemailer = require('nodemailer');
const User = db.User;

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: config.admin_email,
    pass: config.admin_password
  }
});

module.exports = {
    authenticate,
    fb_auth,
    google_auth,
    getCurrentUser,
    forgot_password,
    verifyEmail,
    ResponseResetToken,
    ResponseResetPassword,
    regenerateEmailVerifyLink,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function verifyEmail(params) {
  let user_id = '';
  jwt.verify(params.token, config.secret, function (err, decoded) {
    if (err) throw {error:true, message:err};      
    user_id = decoded.sub;
  });

  const userData = await User.findOne({
    _id:user_id
  });
  if(userData && userData.EmailVerify == true) throw "User Email is already verified.";
    await User.updateOne({ _id: user_id}, {EmailVerify: true });
    return {status:200, message:"Email is verified successfully"};  
}

async function regenerateEmailVerifyLink(req) {
  if (!req.body.email) {
    throw 'Email is required';
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw 'User not found';
  token = jwt.sign({ sub: user.id }, config.secret,
    { expiresIn: 60 * 60 });
    var mailOptions = {
      to: user.email,
      from: config.admin_email,
      subject: 'Verify Email',
      html: 'You are receiving this because you (or someone else) have requested the re-verify of the email .\n\n' +
  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
  '<a href="http://49.249.236.30:6633/auth/email-verify/'+ token + '">Click Here</a>\n\n' +
  'Token will be expired after 1 hour.\n'
  }

  await transporter.sendMail(mailOptions, function(error, info){
    if (error) throw error;
  });
  return {
    message: `An e-mail with verification link has been sent to 
      ${user.email}. Please click on the link to verify your account.`
    };
}

async function ResponseResetPassword(userParam) {
  let user_id = '';
  jwt.verify(userParam.password_token, config.secret, function (err, decoded) {
    if (err) throw {error:true, message:err};      
    user_id = decoded.sub;
  });
  const user = await User.findById(user_id);

  // validate
  if (!user) throw 'User not found with this Email';

  // hash password if it was entered
  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();

  return {status:200, message:"Password is successfully updated"};
}  
async function ResponseResetToken(params) {
  let user_id = '';
  jwt.verify(params.token, config.secret, function (err, decoded) {
    if (err) throw {error:true, message:err};      
    user_id = decoded.sub;
  });

  const userData = await User.findOne({
    _id:user_id
  });

  if(userData && userData.status == false) throw {error:true, message:"User is disabled by admin"};
    return {status:200, message:"Token is verified successfully", token:params.token};  
}

async function forgot_password(req) {
  if (!req.body.email) {
      throw 'Email is required';
  }
  const user = await User.findOne({
      email:req.body.email
  });
  if (!user) {
      throw 'Email does not exist';
  }
  if (!user.EmailVerify) {
    throw 'Email is not verified';
  }
  token = jwt.sign({ sub: user.id }, config.secret,
    { expiresIn: 60 * 60 });      
          
  var mailOptions = {
      to: user.email,
      from: config.admin_email,
      subject: 'Forgot Password',
      html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
  '<a href="http://49.249.236.30:6633/password/reset/'+ token + '">Click here</a>\n\n' +
  'Token will be expired after 1 hour.\n'
  }

  await transporter.sendMail(mailOptions, function(error, info){
    if (error) throw error;
  });

  return {status:200, message:'An e-mail has been sent to ' + user.email};
}   

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if(!user) throw "User not found with this Email";
    if (user && bcrypt.compareSync(password, user.hash)) {
        if(!user.EmailVerify) throw "Please verify your email first to login into your account.";
        if(!user.status) throw "Profile disabled by admin please contact administrator";
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getCurrentUser(req, res) {
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(' ')[1],
        decoded;
    try {
        decoded = jwt.verify(authorization, secret.secretToken);
    } catch (e) {
        return res.status(401).json('unauthorized');
    }
    var userId = decoded.id;
    // Fetch the user by id 
    User.findOne({_id: userId}).then(function(user){
        // Do something with the user
        return res.json(200);
    });
  }
  return res.json(500);
}

async function fb_auth(param) {
  const user = await User.findOne({
    email:param._json.email
  });
  if(!user){
    const user = new User();
    user.profile_id = param.id;
    user.email = param._json.email; 
    user.firstName = param.name.givenName;
    user.lastName = param.name.familyName;
    user.type = param.provider;
    user.EmailVerify = true;
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    await user.save();
    return {
      ...userWithoutHash,
      token
    };
  }else{
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}

async function google_auth(param) {
  const user = await User.findOne({
    email:param._json.email
  });
  if(!user){
    const user = new User();
    user.profile_id = param.id;
    user.email = param._json.email; 
    user.firstName = param.name.givenName;
    user.lastName = param.name.familyName;
    user.type = param.provider;
    user.EmailVerify = true;
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    await user.save();
    return {
      ...userWithoutHash,
      token
    };
  }else{
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(req) {
    // validate
    if (await User.findOne({ email: req.body.email })) throw 'Email ' + req.body.email + ' is already taken';
    const userData = new User(req.body);

    // hash password
    if (req.body.password) {
      userData.hash = bcrypt.hashSync(req.body.password, 10);
      token = jwt.sign({ sub: userData.id }, config.secret,
        { expiresIn: 60 * 60 });
    }

    var mailOptions = {
        to: userData.email,
        from: config.admin_email,
        subject: 'Registeration',
        html: 'You are receiving this because you have requested the registration for your account.\n\n' +
'Please click here to verify your email:\n\n' +
'<a href="http://49.249.236.30:6633/auth/email-verify/'+ token + '">Click Here</a>\n\n'+
'Token will be expire after 1 hour.\n'
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) throw error;
    });

    // save user
    await userData.save();
    
    return {status:200, message:'An e-mail with verification link has been sent to ' + userData.email + '. Please click on the link to verify your account.'};
}

async function update(id, email) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'Email :-"' + userParam.email + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
      userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}