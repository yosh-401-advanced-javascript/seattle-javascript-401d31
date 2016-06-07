'use strict';

const debug = require('debug')('noteapp:response');

module.exports = function(statusCode, data, res){
  debug(`response ${statusCode}`);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(data));
  res.end();
};
