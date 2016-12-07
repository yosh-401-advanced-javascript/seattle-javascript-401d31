'use strict';

// require node modules
const http = require('http');
// require npm modules
const debug = require('debug')('noteapp:server');
// require app modules
const Router = require('./lib/router');
const noteRoute = require('./route/note-route');
// set constants && require modules dependent on constants
const port = process.env.PORT || 3000;

// setup routes
const router = new Router();
noteRoute(router);

const server = module.exports = http.createServer(router.route());

server.listen(port, function(){
  debug(`server up ${port}`);
});
