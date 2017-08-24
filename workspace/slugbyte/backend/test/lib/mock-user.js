'use strict';

const User = require('../../project/auth/model/user.js');

const mockUser = module.exports = {}

mockUser.create = function(done){
  new User({
    username: 'example' + Math.random(),
    email: 'example@' + Math.random() + '.com',
  })
  .passwordHash('password')
  .then(user => user.save())
  .then(user => {
    this.tempUser = user;
    return user.tokenCreate();
  })
  .then(token => {
    this.tempToken = token
    done();
  })
  .catch(done)
}

mockUser.remove = () => User.remove({})
