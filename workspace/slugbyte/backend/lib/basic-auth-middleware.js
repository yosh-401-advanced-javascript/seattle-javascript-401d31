'use strict'

const User = require('../project/auth/model/user.js');
const httpErrors = require('http-errors');

module.exports = (req, res, next) => {
  let {authorization} = req.headers;
  if(!authorization) 
    return next(httpErrors(401, 'no authorization header'));

  let encoded = authorization.split('Basic ')[1];
  if(!encoded)
    return next(httpErrors(401, 'no basic auth found'));

  let decoded = Buffer.from(encoded, 'base64').toString();
  let [username, password] = decoded.split(':');
  if(!username || !password)
    return next(httpErrors(401, 'basic auth invalid'));

  User.findOne({username})
  .then(user => {
    if(!user) 
      return next(httpErrors(401, 'user not found'));
    return user.passwordCompare(password)
  })
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => next(httpErrors(401, err.message)));
};
