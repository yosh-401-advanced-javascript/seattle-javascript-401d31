'use strict';

const jsonParser = require('body-parser').json();
const authRouter = module.exports = new require('express').Router()
const basicAuth = require('../../lib/basic-auth-middleware.js');

const User = require('./model/user.js');

authRouter.post('/signup', jsonParser, (req, res, next) => {
  User.create(req.body)
  .then(token => {
    res.send(token);
  })
  .catch(next);
});

authRouter.get('/login', basicAuth, (req, res, next) => {
  req.user.tokenCreate()
  .then(token => res.send(token))
  .catch(next)
});
