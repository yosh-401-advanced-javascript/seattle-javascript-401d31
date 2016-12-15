'use strict';

const storage = require('./storage.js');

storage.on('beforeWrite', function(key, value){
  // do what you need to do
  console.log('beforeWrite', key, value);
});

storage.on('afterWrite', function(key, value){
  console.log('afterWrite', key, value);
});

storage.emit('setData', 'lu', {name: 'wat'});

storage.emit('getData', 'lu', function(data){
  console.log('getData', data);
})
