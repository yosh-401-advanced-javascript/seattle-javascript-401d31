'use strict'

const errorHandler = require('./error-handler')
const Auth = require('../model/auth')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  let authHeaders = req.headers.authorization
  if(!authHeaders) return errorHandler(new Error('Authorization failed. Authorization headers required'), res)

  let token = authHeaders.split('Bearer ')[1]
  if(!token) return errorHandler(new Error('Authorization failed. Token required'), res)

  jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
    if(err) {
      err.message = 'Authorization failed. Token not verified.'
      return errorHandler(err, res)
    }

    Auth.findOne({ compareHash: decoded.token })
      .then(user => {
        if(!user) return errorHandler(new Error('Authorization failed. User not found.'), res)
        req.user = user
        next()
      })
      .catch(err => errorHandler(err, res))
  })
}