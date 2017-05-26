'use strict'

const Node = function(val) {
  this.val = val
  this.children = []
}

const Tree = module.exports = function() {
  this.root = null
}

Tree.prototype.preOrder = function(cb) {
  _walk(this.root)

  function _walk(node) {
    cb(node)
    node.children.forEach(_walk)
  }
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

Tree.prototype.prune = function(val) {
  if(!this.root) return
  let current = this.root
  let parent = null
  let idx = null

  this.preOrder(node => {
    current.children.forEach((child, i) => {
      if(child.val === val) {
        idx = i
        parent = current
        return
      }
      current = node
    })
  })

  parent.children.splice(idx, 1)
}

Tree.prototype.remove = function(val) {
  if(!this.root) return
  let tempParent = null
  let tempChild = null
  let idx = null

  this.preOrder(node => {
    if(!node) return
    node.children.forEach((child, i) => {
      if(child.val === val) {
        tempParent = node
        tempChild = child
        idx = i
      }
    })
    return
  })
  tempParent.children.splice(idx, 1)
  tempParent.children = tempParent.children.concat(tempChild.children)
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

Tree.prototype.countNodes = function() {
  let count = 0
  this.preOrder(node => {
    if(!node) return
    count++
  })
  return count
}

Tree.prototype.countEdges = function() {
  return this.countNodes() - 1
}

Tree.prototype.maxChildren = function() {
  let highCount = 0
  let highNode = null
  this.preOrder(node => {
    if(!node) return
    if(node.children.length > highCount) {
      highNode = node
      highCount = node.children.length
    }
  })
  return {highCount, highNode}
}




let t = new Tree()
t.add(1)
t.add(2, 1)
t.add(3, 1)
t.add(4, 2)
t.add(5, 2)
t.add(6, 3)
console.log('pre-testing', t.prettyPrint())
console.log('----------------------------');

// NOTE This displays that we can prune a branch from a tree
console.log('pruning branch starting at 2; includes 3 and 4');
console.log('pre-prune', t.prettyPrint());
t.prune(2)
console.log('post-prune', t.prettyPrint());
console.log('----------------------------');

// NOTE This displays that we can remove a single node from a tree, and maintain it's children
console.log('removing node 3; 6 should remain');
console.log('pre-remove', t.prettyPrint());
t.remove(3)
console.log('post-remove', t.prettyPrint());
console.log('----------------------------');

// NOTE This counts the number of nodes in a tree
let countNodes = t.countNodes()
console.log('countNodes', countNodes);
console.log('----------------------------');

// NOTE This counts the number of edges in a tree
let countEdges = t.countEdges()
console.log('countEdges', countEdges);
console.log('----------------------------');

// NOTE This counts the max number of children in a tree
let maxChildren = t.maxChildren()
console.log('maxChildred', maxChildren)
console.log('----------------------------');
console.log('root', t.root);
