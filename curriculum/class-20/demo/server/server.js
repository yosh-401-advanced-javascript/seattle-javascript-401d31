'use strict';

const port = process.env.PORT || 3333;
const io = require('socket.io')(port);

io.on('connection', (socket) => {
  socket.on('speak', (payload) => {
    socket.emit('message', payload);
  });
});
