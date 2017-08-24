'use strict';

const User = require('../project/auth/model/user.js');
const httpErrors = require('http-errors');
const jwt = require('jsonwebtoken');
const promisify = require('./promisify.js');

module.exports = (req, res, next) => {
  let {authorization} = req.headers;
  if(!authorization)
    return next(httpErrors(401, 'no authorization header'));

  let token = authorization.split('Bearer ')[1];
  if(!token)
    return next(httpErrors(401, 'invalied bearer authorization'));

  promisify(jwt.verify)(token, process.env.APP_SECRET)
  .then(decoded => User.findOne({tokenHash: decoded.tokenHash}))
  .then(user => {
    if(!user)
      throw new Error('user not found');
    req.user = user;
    next()
  })
  .catch(err => next(httpErrors(401, err.message)));
};
