'use strict';

const Node = module.exports = function(value){
  this.value = value;
  this.next = null;
}

Node.prototype.addNode = function(node){
  if (this.next) {
    this.next.addNode(node);
    return;
  }
  this.next = node;
};
