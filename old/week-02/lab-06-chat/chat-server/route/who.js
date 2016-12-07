'use strict';

// list nicknames of all sockets in pool
module.exports = function(clientPool){
  clientPool.on('\\who', function(socket, message){
    message = '';
    clientPool.forEach(function(client){
      message += `\n  ${client.nickname}`;
    });
    clientPool.emit('say', socket, message);
  });
};
