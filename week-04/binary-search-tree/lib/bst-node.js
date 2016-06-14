'use strict'

const BSTNode = module.exports = function(value){
  this.value = value
  this.leftNode = null
  this.rightNode = null
}

BSTNode.prototype.addBSTNodeWithValue = function(value){
  if(this.value === value)
    return
  if(this.value > value)
    if(!this.leftNode)
      return this.leftNode = new BSTNode(value)
    return this.leftNode.addBSTNodeWithValue(value)
  if(!this.rightNode)
    return this.rightNode = new BSTNode(value)
  this.rightNode.addBSTNodeWithValue(value)
}
