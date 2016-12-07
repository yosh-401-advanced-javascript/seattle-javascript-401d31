'use strict';

const debug = require('debug')('noteapp:storage');
const httpError = require('http-errors');
exports.store = {};

exports.setItem = function(schema, item){
  debug('setItem');
  return new Promise((resolve, reject) => {
    if (!item.id) {
      var err = httpError(400, 'must provide id');
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
      var err = httpError(404, 'schema does not exist');
      return reject(err);
    }
    if (!this.store[schema][id]){
      var err = httpError(404, 'item must have id property');
      return reject(err);
    }
    resolve(this.store[schema][id]);
  });
};

exports.deleteItem = function(schema, id){
  debug('deleteItem');
  return new Promise((resolve, reject) => {
    if (!this.store[schema]){
      var err = httpError(404, 'storage schema not found');
      return reject(err);
    }
    if (!this.store[schema][id]){
      var err = new Error(404, 'storage item not found');
      return reject(err);
    }
    delete this.store[schema][id];
    resolve(true);
  });
};
