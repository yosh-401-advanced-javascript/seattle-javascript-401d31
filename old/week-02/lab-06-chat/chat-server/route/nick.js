'use strict';

module.exports = function(clientPool) {
  clientPool.on('\\nick', function(socket, message) {
    let nickname = message.trim();

    // check to make sure new nickname is only one word
    const offset = nickname.indexOf(' ');
    if (offset !== -1) {
      clientPool.emit('say', socket, 'Sorry!, but your nickname may obly be one word');
      return
    }

    // check there  is a new nickname to set
    if (nickname.length === 0){
      clientPool.emit('say', socket, 'Sorry!, your nick name may not be empty');
      return
    }
    // check that no sockets all ready use that nickname
    const taken = clientPool.fetchSocketWithNickname(nickname);
    if (taken){
      clientPool.emit('say', socket, 'Sorry!, that nickname is taken');
      return
    }
    
    // let everyone know the sockets new nickname
    // change the socket nickname
    clientPool.emit('broadcast', socket, `setting my nickname to ${nickname}`);
    socket.nickname = nickname;
  });
};
