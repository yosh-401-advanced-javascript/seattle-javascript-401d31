'use strict'

const debug = require('debug')('http:router')
const parseUrl = require('./url-parser')
const parseJson = require('./json-parser')

// Router constructor
const Router = module.exports = function() {
  this.routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
  }
}


// Router methods, which line up with acceptable RESTful architecture

// ['get', 'post', 'put', 'delete'].map(method => {
//   Router.prototype[method] = function(endpoint, cb) {
//     debug(`#Router: ${method} ${endpoint} mounted`)
//     this.routes[method.toUpperCase()][endpoint] = cb
//   }
// })

Router.prototype.get = function(endpoint, cb) {
  debug(`#Router: GET ${endpoint} mounted`)
  this.routes.GET[endpoint] = cb
}
Router.prototype.post = function(endpoint, cb) {
  debug(`#Router: POST ${endpoint} mounted`)
  this.routes.POST[endpoint] = cb
}
Router.prototype.put = function(endpoint, cb) {
  debug(`#Router: PUT ${endpoint} mounted`)
  this.routes.PUT[endpoint] = cb
}
Router.prototype.delete = function(endpoint, cb) {
  debug(`#Router: DELETE ${endpoint} mounted`)
  this.routes.DELETE[endpoint] = cb
}


// Router.route is for returning a function which handling REQ/RES; to be passed into the server instance
Router.prototype.route = function() {
  return (req, res) => {
    Promise.all([
      parseUrl(req),
      parseJson(req),
    ])
    .then(() => {
      if(typeof this.routes[req.method][req.url.pathname] === 'function') {
        debug(`Request made to ${this.routes[req.method][req.url.pathname]}`)
        this.routes[req.method][req.url.pathname](req, res)
        return
      }

      debug('Invalid request. 404 Not Found')

      response.writeHead(404, { 'Content-Type': 'text/plain' })
      response.write('Not Found')
      response.end()
      return
    })
    .catch(err => {
      debug(`Gnarf. There was an error:\n${err}`)

      response.writeHead(400, { 'Content-Type': 'text/plain' })
      response.write('Bad Request')
      response.end()
      return
    })
  }
}
