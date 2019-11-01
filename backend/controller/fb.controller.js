const express = require('express');
const router = express.Router();
const config = require('config.json');
// add passport
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const userService = require('../services/user.service');

//social login
router.get('/login',
  passport.authenticate('facebook',{scope:'email'}),
  function(req, res){
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
});

router.get('/callback',
  passport.authenticate('facebook', { successRedirect : '/', failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
// passport setting
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the FacebookStrategy within Passport.
passport.use(new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: config.fb_redirect_uri,
    profileFields: ['id','first_name', 'last_name', 'gender', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    if(profile && profile.id){
      userService.fb_auth(profile).then(token => {
        process.nextTick(function () {
          return done(null, token);
        });
      } );
    }else{
      process.nextTick(function () {
        return done(null, token);
      });
    }
  }
));