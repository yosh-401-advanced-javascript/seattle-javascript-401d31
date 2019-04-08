'use strict';

const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`) );

let allowedEvents = ['save','error'];
let socketPool = {};

server.on('connection', (socket) => {
  addSocket(socket);
  socket.on('data', dispatchEvent);
  socket.on('close', () => deleteSocket(socket.id));
});

const addSocket = (socket) => {
  socket.id = `Socket-${Math.random()}`;
  socketPool[socket.id] = socket;
};

const deleteSocket = socketId => {
  delete socketPool[socketId];
};

const dispatchEvent = (buffer) => {
  let text = buffer.toString().trim();
  let [event,payload] = text.split(/\s+(.*)/);

  // Push to the pool that matches the event name
  if ( allowedEvents.includes(event) ) {
    for (let socket in socketPool) {
      socketPool[socket].write(`${event} ${payload}`);
    }
  }
  else {
    console.log(`IGNORE ${event}`);
  }
};


