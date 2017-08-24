'use strict';

const storage = require('./storage.js');

storage.on('beforeDelete', function(key){
  console.log('about to delete', key);
});

storage.on('afterDelete', function(key, value){
  // if the menu is delete then delete all of it items
  if(key === 'menu'){
    value.forEach( item => storage.emit('deleteData', item.name));
  }
});

let menu = [
  {
    name: 'blt',
    price: 8.45,
  },
  {
    name: 'pbj',
    price: 4.50,
  },
  {
    name: 'club',
    price: 9.00,
  },
  {
    name: 'veggy',
    price: 8.45,
  }
];

menu.forEach( item => storage.emit('setData', item.name, item));
storage.emit('setData', 'menu', menu);

storage.emit('getData', 'blt', function(data){
  console.log('blt', data);
})

storage.emit('deleteData', 'menu');

storage.emit('getData', 'blt', function(data){
  console.log('blt', data);
})
