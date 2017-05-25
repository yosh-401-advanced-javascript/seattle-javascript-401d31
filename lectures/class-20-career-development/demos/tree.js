'use strict'

const Node = function(val) {
  this.val = val
  this.children = []
}

const Tree = module.exports = function() {
  this.root = null
}

Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val)

  if(!this.root) {
    this.root = newNode
    return
  }

  this.preOrder(node => {
    if(node.val === parentVal) {
      node.children.push(newNode)
      return
    }
  })
}

Tree.prototype.preOrder = function(cb) {
  _walk(this.root)

  function _walk(node) {
    // console.log(node.val);
    cb(node)
    node.children.forEach(_walk)
  }
}

Tree.prototype.prettyPrint = function() {
  let result = []
  this.preOrder(node => {
    if(node) {
      result.push(node.val)
      return
    }
  })
  return result.toString()
}
