'use strict';

module.exports = function(clientPool){
  clientPool.on('\\help', function(socket, message){
    var commands = 'commands:';
    commands += '\n  \\who: list everyones nickname';
    commands += '\n  \\nick nickname: set your nickname';
    commands += '\n  \\dm nickname message: direct message a user';
    commands += '\n\n  \\help: display this help message';
    clientPool.emit('say', socket, commands);
  });
};
