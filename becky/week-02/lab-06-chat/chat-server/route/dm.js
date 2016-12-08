'use strict';

module.exports = function(clientPool){
  clientPool.on('\\dm', function(socket, message){
    message = message.trim();
    const offset = message.indexOf(' ')
    if (offset === -1) {
      clientPool.emit('say', socket, 'Sorry, must provide nickname and message!');
      return;
    }

    const nickname = message.slice(0, offset);
    message = message.slice(offset).trim();

    const toSocket = clientPool.fetchSocketWithNickname(nickname);
    if (!toSocket){
      clientPool.emit('say', socket, `Sorry, cant find anyone with the nickname ${nickname}!`);
      return;
    }

    clientPool.emit('say', toSocket, `${socket.nickname} [DM]: ${message}`);
  });
};
