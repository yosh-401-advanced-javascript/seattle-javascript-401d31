'use strict';
const uuid = require('node-uuid');
const debug = require('debug')('noteapp:note');

module.exports = function(content){
  this.id = uuid.v4();
  this.content = content;
  this.createdAt = new Date();
  debug(`create note ${this.id}`);
};
