const express = require('express');
const router = express.Router();
const config = require('config.json');
// add passport
const passport = require('passport');
const userService = require('../services/user.service');

//social login
router.get('/login',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/callback',
  passport.authenticate('google', { successRedirect : '/auth/google/profile', failureRedirect: '/login' }),
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

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.google_redirect_uri,
    profileFields: ['id','first_name', 'last_name', 'gender', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    if(profile && profile.id){
      userService.google_auth(profile).then(token => {
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