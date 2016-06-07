'use strict';

const debug = require('debug')('noteapp:storage');
exports.store = {};

exports.setItem = function(schema, item){
  debug('setItem');
  return new Promise((resolve, reject) => {
    if (!item.id) {
      var err = new Error('item must have id property');
      return reject(err);
    }
    if (!this.store[schema]) this.store[schema] = {};
    this.store[schema][item.id] = item;
    resolve(item);
  });
};

exports.fetchItem = function(schema, id){
  debug('fetchItem');
  return new Promise((resolve, reject) => {
    if (!this.store[schema]){
      var err = new Error('item must have store property');
      return reject(err);
    }
    if (!this.store[schema][id]){
      var err = new Error('item must have id property');
      return reject(err);
    }
    resolve(this.store[schema][id]);
  });
};

exports.deleteItem = function(schema, id){
  debug('deleteItem');
  return new Promise((resolve, reject) => {
    if (!this.store[schema]){
      var err = new Error('storage schema not found');
      return reject(err);
    }
    if (!this.store[schema][id]){
      var err = new Error('storage item not found');
      return reject(err);
    }
    delete this.store[schema][id];
    resolve(true);
  });
};
