'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const httpErrors = require('httpErrors');

const UserSchema = mongoose.Schema({
  username: {type: String, minlength: 4, required: true, unique: true},
  email: {type: String, minlength: 4, required: true, unique: true},
  tokenHash: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true},
});

UserSchema.pre('save', (next) => {
  return bcrypt.hash(this.password, 8)
  .then(hash => {
    this.passwordHash = hash;
    return this;
  })
  .catch(next);
});

UserSchema.methods.passwordHashCreate = function(password){
  return bcrypt.hash(password, 8)
  .then(hash => {
    this.passwordHash = hash;
    return this;
  })
};

UserSchema.methods.passwordHashCompare = function(password){
  return bcrypt.compare(password, this.passwordHash)
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
      this.findHash = crypto.randomBytes(32).toString('hex');
      this.save().then(() => resolve(this))
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



module.exports = mongoose.model('user', UserSchema);



