'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {});

client.on('data', function(data) {
  console.log('Received: ' + data);
});

client.on('close', function() {
  console.log('Connection closed');
});
