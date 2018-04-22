let crypto = require('crypto');
let jwt = require('jsonwebtoken');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    hash: DataTypes.STRING,
    salt: DataTypes.STRING
  });

  User.prototype.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  User.prototype.generateJWT = function() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      _id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000)
    }, process.env.RECIPE_BACKEND_SECRET);
  };

  User.prototype.setPassword = function(password) {
    this.setDataValue('salt', crypto.randomBytes(32).toString('hex'));
    this.setDataValue('hash', crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex'));
  };

  return User;

};
