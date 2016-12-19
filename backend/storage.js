'use strict';
// get access to EventEmitter constructor
const EventEmitter = require('events').EventEmitter;

let storage = {};

// create an instance of the EventEmitter
let storageEmitter = module.exports = new EventEmitter();

// define a listener called setData
storageEmitter.on('setData', function(key, value){
  // beforeWrite and afterWrite listners have not been defined
  // but they could be implemented by a consumer of this storage 
  // module if they need  that functionality for any reason this 
  // is a super powerful reason people use EventEmitters
  storageEmitter.emit('beforeWrite', key, value);
  storage[key] = value; 
  storageEmitter.emit('afterWrite', key, value);
});

storageEmitter.on('getData', function(key ,callback){
  callback(storage[key]);
});

storageEmitter.on('deleteData', function(key){
  storageEmitter.emit('beforeDelete', key, storage[key]);
  let backup = storage[key];
  delete storage[key];
  storageEmitter.emit('afterDelete', key, backup);
});
