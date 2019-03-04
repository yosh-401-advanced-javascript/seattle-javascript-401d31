'use strict';

const io = require('socket.io')(3000);


let count = 0;
let letter = 64;
const A = 65;
const Z = 90;

const numbers = io.of('/numbers');
numbers.on('connection', (socket) => {
  
  console.log('Connected to Numbers', socket.id);
  
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`Joined ${room}`);
  });
  
  socket.on('next-number', () => {
    socket.broadcast.emit('number', ++count);
    socket.to('negative').emit('_number', count * -1);
  });

});

const letters = io.of('/letters');
letters.on('connection', (socket) => {

  console.log('Connected to Letters', socket.id);

  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`Joined ${room}`);
  });

  socket.on('next-letter', () => {
    if ( ++letter > 90 ) { letter = 65; }
    let char = String.fromCharCode(letter);
    let _char = String.fromCharCode(letter + 32);
    socket.broadcast.emit('letter', char);
    socket.to('lowercase').emit('_letter', _char);
  });

  
});




