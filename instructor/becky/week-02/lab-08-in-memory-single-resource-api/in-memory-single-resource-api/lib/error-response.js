'use strict';

const debug = require('debug')('noteapp:error-response');

module.exports = function(err, res){
  debug('error response');
  var status = err.status || 500;
  var message = err.name || 'internal server error';
  console.error(err.message);
  res.writeHead(status);
  res.write(message);
  res.end();
};

