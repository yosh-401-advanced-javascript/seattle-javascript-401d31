'use strict'

const url = require('url')
const queryString = require('querystring')
const debug = require('debug')('http:url-parser')

module.exports = function(req) {
  debug('#url-parser')

  req.url = url.parse(req.url)
  req.url.query = queryString.parse(req.url.query)

  // Illustrate this as a pattern for returning a Promise given only a success case
  Promise.resolve(req)
}