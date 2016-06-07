'use strict';

const debug = require('debug')('noteapp:parse-body');

module.exports = function(req){
  debug('parse body');
  return new Promise(function(resolve, reject){
    if(/(POST|PUT)/.test(req.method)){
      req.body = '';
      req.on('data', function(data){
        req.body += data.toString();
      });
      req.on('end', function(){
        try {
          req.body = JSON.parse(req.body);
          resolve();
        } catch (err){
          debug('ERROR', err.message);
          reject(err);
        }
      });
      return;
    }
    resolve();
  });
};
