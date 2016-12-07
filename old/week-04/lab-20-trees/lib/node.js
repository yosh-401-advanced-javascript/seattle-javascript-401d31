'use strict';

var Node = module.exports = function(value){
  this.value = value;
  this.children = [];
};

Node.prototype.addNodeWithValue = function(value){
  this.children.push(new Node(value));
};

