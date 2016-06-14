'use strict'
const BSTNode = require('./bst-node')

const BinarySearchTree = module.exports = function()
  this.top = null;
}

BinarySearchTree.prototype.insertValue = function(value){
  if (!this.top)
    return this.top = new BSTNode(value)
}
