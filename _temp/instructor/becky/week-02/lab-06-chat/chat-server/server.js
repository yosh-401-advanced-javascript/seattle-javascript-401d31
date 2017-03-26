'use strict';

// require node modules
const net = require('net');

// require app modules
const ClientPool = require('./lib/client-pool');
const clientPool = new ClientPool();

// setup globals
const port = process.env.PORT || 3000;
const server = net.createServer();

// add event listeners to the client pool
require('./route/dm')(clientPool);
require('./route/who')(clientPool);
require('./route/nick')(clientPool);
require('./route/help')(clientPool);

// handle new socket connections
server.on('connection', function(socket){
  clientPool.emit('register', socket);
});

// log server errors
server.on('error', function(err){
  console.error('SERVER ERROR:', err.message);
});

// start the server
server.listen(port , function(){
  console.log('chat running on port:', port);
});
