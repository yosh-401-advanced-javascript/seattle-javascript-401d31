'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const httpErrors = require('http-errors');

const UserSchema = mongoose.Schema({
  username: {type: String, minlength: 4, required: true, unique: true},
  email: {type: String, minlength: 4, required: true, unique: true},
  tokenHash: {type: String, unique: true},
  password: {type: String, required: true},
});

// instance methods
UserSchema.methods.passwordHash = function(password){
  return bcrypt.hash(password, 8)
  .then(hash => {
    this.password = hash;
    return this;
  })
}

UserSchema.methods.passwordCompare = function(password){
  return bcrypt.compare(password, this.password)
  .then(isCorrect => {
    if(!isCorrect) 
      throw httpErrors(401, 'incorrect password');
    return this;
  });
};

UserSchema.methods.tokenHashCreate = function(){
  return new Promise((resolve, reject) => { 
    let tries = 3;
    let _gennerateFindHash = () => {
      this.tokenHash = crypto.randomBytes(32).toString('hex');
      this.save()
      .then(() => resolve(this))
      .catch(err => {
        if (tries < 1) 
          return reject(err);
        tries--;
        _gennerateFindHash();
      });
    };

    _gennerateFindHash();
  });
};

UserSchema.methods.tokenCreate = function(){
  return this.tokenHashCreate()
  .then(user => {
    return jwt.sign({tokenHash: user.tokenHash}, process.env.APP_SECRET);
  });
}

const User = module.exports = mongoose.model('user', UserSchema);

// Static Methods
User.create = function(opts){
  let password = opts.password;
  delete opts.password;
  return new User(opts).passwordHash(password)
  .then(user => user.tokenCreate())
}




