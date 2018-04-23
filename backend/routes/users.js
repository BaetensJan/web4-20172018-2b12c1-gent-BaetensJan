var express = require('express');
var router = express.Router();
let models = require('../models');
let jwt = require('express-jwt');
let User = models.User;
let passport = require('passport');

let auth = jwt({secret: process.env.BACKEND_SECRET});

router.post('/register', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json(
      {message: 'Please fill out all fields'});
  }
  let user = new User();
  user.set('username', req.body.username);
  user.setPassword(req.body.password);
  user.save().then(function () {
    return res.json({token: user.generateJWT()});
  }).catch((err) => {
    return next(err);
  });
});

router.post('/login', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json(
      {message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

module.exports = router;
