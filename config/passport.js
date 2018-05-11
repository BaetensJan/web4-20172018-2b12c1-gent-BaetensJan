let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let models = require('../models');

passport.use(
  new LocalStrategy(function(username, password, done) {
    models.User.findOne({ where: { username: username }}).then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    }).catch(err => {
      return done(err);
    });
  })
);
