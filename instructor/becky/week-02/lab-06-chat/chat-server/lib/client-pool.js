'use strict';
const EventEmitter = require('events').EventEmitter;

const ClientPool = module.exports = function(){
  EventEmitter.call(this);
  this.pool = {};

  // register new socksts with this.pool
  // and add event listeners to socket
  this.on('register', (socket) => {
    this._registerSocket(socket);
    this._registerSocketListeners(socket);
  });

  // write message to all the sockts in the pool
  this.on('broadcast', (socket, message) => {
    this.forEach((client) => {
      this.emit('say', client, `${socket.nickname}: ${message}`);
    });
  });

  // write message to a socket with new line
  this.on('say', (socket, message) => {
    socket.write(message + '\n');
  });
};

ClientPool.prototype = Object.create(EventEmitter.prototype);

// act like array for each but for each socket in the pool
ClientPool.prototype.forEach = function(callback){
  const clientIds = Object.keys(this.pool);
  clientIds.forEach((clientId, index, whole) => {
    callback(this.pool[clientId], index, whole);
  });
};

// return a socket with a specified nickname
ClientPool.prototype.fetchSocketWithNickname = function(nickname){
  const clientIds = Object.keys(this.pool);
  let clientId;
  // not using this.forEach because it is slower than for for lookup
  // given worst case senario
  for (let i = 0; i < clientIds.length; i++){
    clientId = clientIds[i];
    if (this.pool[clientId].nickname === nickname){
      return this.pool[clientId];
    }
  }
};

// remove a socket from the pool
ClientPool.prototype._removeSocketWithClientId = function(clientId){
  delete this.pool[clientId];
};

// give the socket a nickname and clientId
// add a socket to the pool
ClientPool.prototype._registerSocket = function (socket){
  socket.clientId = genClientId();
  socket.nickname = `guest_${Math.floor(Math.random() * 100)}`;
  this.pool[socket.clientId] = socket;
  this.emit('say', socket, `Welcome, ${socket.nickname}!`)
  this.emit('broadcast', socket, 'joined the chat');
}


ClientPool.prototype._registerSocketListeners = function (socket){
  // when a socket sends data parse into a requeset object 
  // with a route and a message
  // then emmit the route with the message
  socket.on('data', (data) => {
    var request = parseRequest(data);
    console.log('request:', request);
    this.emit(request.route , socket, request.message);
  });

  // when a socket quits remove them from the pool and infrom 
  // everyone they have left the chat
  socket.on('close', () => {
    console.log(`${socket.nickname} quit`);
    this._removeSocketWithClientId(socket.clientId);
    this.emit('broadcast', socket, 'left the chat');
  });

  // after a socket errors the close event will allways be emitted
  socket.on('error', (err) => {
    console.error('Client ERROR:', err.message);
  });
}

// parse incomming data into routes and messages
// if user didnt type a route default the route to broadcast
function parseRequest(data){
  var route = 'broadcast';
  var message = data.toString().trim();
  if (message[0] === '\\'){
    route = message.split(' ')[0];
    message = message.split(' ').slice(1).join(' ');
  }

  return {route: route, message: message};
}

// create a unique id for each new client
function genClientId(){
  return `client_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}
