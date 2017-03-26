'use strict';

const parseUrl = require('url').parse;
const parseQuery = require('querystring').parse;
const parseBody = require('./parse-body');
const errorResponse = require('./error-response');
const httpError = require('http-errors');
const debug = require('debug')('noteapp:router');

const Router = module.exports = function(){
  this.routes = {
    GET: {},
    PUT: {},
    POST: {},
    DELETE: {}
  };
};

Router.prototype.get = function(endpoint, callback){
  this.routes.GET[endpoint] = callback;
  return this;
};

Router.prototype.put = function(endpoint, callback){
  this.routes.PUT[endpoint] = callback;
  return this;
};

Router.prototype.post = function(endpoint, callback){
  this.routes.POST[endpoint] = callback;
  return this;
};

Router.prototype.delete = function(endpoint, callback){
  this.routes.DELETE[endpoint] = callback;
  return this;
};

Router.prototype.route = function(){
  const routes = this.routes;
  return function(req, res){
    req.url = parseUrl(req.url);
    req.url.query = parseQuery(req.url.query);
    debug(`hit route ${req.method} ${req.url.pathname}`);

    parseBody(req)
    .then(() => {
      if(typeof routes[req.method][req.url.pathname] === 'function'){
        return routes[req.method][req.url.pathname](req, res);
      }
      errorResponse(httpError(404, 'no such route'), res);
    }).catch((err) => {
      errorResponse(httpError(400, 'bad json'), res);
    });
  }
};

