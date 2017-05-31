'use strict'

// NOTE Scott's work in progress.

const bstNode = module.exports = function(val) {
  this.val = val
  this.parent = null
  this.left = null
  this.right = null
}

bstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false
    else return this.left.contains(val)
  } else if(val > this.val) {
    if(!this.right) return false
    else return this.right.contains(val)
  } else return true
}


bstNode.prototype.lookup = function(val) {
  if(val < this.val) this.left ? this.left.lookup(val) : null
  if(val > this.val) this.right ? this.right.lookup(val) : null
  return this
}

bstNode.prototype.insert = function(val) {
  if(!this) return
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val)
      this.right.parent = this
    } else this.right.insert(val)
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val)
      this.left.parent = this
    } else this.left.insert(val)
  }
  return
}

bstNode.prototype.delete = function(val, balanced=false) {
  let node = this.lookup(val)
  console.log(node);
  let parent = node.parent

  if(node._childrenCount() === 0) {
    if(node._isLeftChild()) {
      parent.left = null
    } else {
      parent.right = null
    }
    node.parent = null
    return node
  } else if(node._childrenCount() === 1) {
    // node has one child
    // find whether child is left or right
    // if(node._isLeftChild()) node.parent.left = node.left
    // assign child as successor
    // assign successor to parent.child
    // remove ref from this to successor
  } else {

  }

  // let node = this.lookup(val)
  // let parent = node.parent
  // let child, successor
  //
  // if(node) {
  //   let childrenCount = node._childrenCount()
  //   if(childrenCount === 0) {
  //     if(parent) {
  //       if(parent.left === node) parent.left = null
  //       else parent.right = null
  //       if(balanced) parent._selfBalance()
  //     } else this.val = null
  //   } else if(childrenCount === 1) {
  //     if(node.left) child = node.left
  //     else child = node.right
  //     if(parent) {
  //       if(parent.left === node) parent.left = child
  //       else parent.right = child
  //       child.parent = parent
  //       if(balanced) child._selfBalance()
  //     } else {
  //       this.left = child.left
  //       this.right = child.right
  //       try {
  //         this.right.parent = this
  //         this.left.parent = this
  //       } catch(e) {}
  //       this.val = child.val
  //       if(balanced) this._selfBalance()
  //     }
  //   } else {
  //     parent = node
  //     successor = node.right
  //     while(successor.left) {
  //       parent = successor
  //       successor = successor.left
  //     }
  //     node.val = successor.val
  //     if(parent.left === successor) {
  //       parent.left = successor.right
  //       try {
  //         parent.left.parent = parent
  //       } catch(e) {}
  //       parent._selfBalance()
  //     } else {
  //       parent.right = successor.right
  //       try {
  //         parent.right.parent = parent
  //       } catch(e) {}
  //       if(balanced) parent._selfBalance()
  //     }
  //   }
  // }
  // if(render && !this.parent) this.saveRender()
}

bstNode.prototype.size = function() {
  if(!this) return 0
  let leftSize = this.left ? this.left.size() : 0
  let rightSize = this.right ? this.right.size() : 0
  return leftSize + rightSize + 1
}

bstNode.prototype.maxDepth = function() {
  let leftDepth = this.left ? this.left.maxDepth() : 0
  let rightDepth = this.right ? this.right.maxDepth() : 0
  return Math.max(leftDepth, rightDepth) + 1
}

bstNode.prototype._childrenCount = function() {
  let count = 0
  if(this.left) count++
  if(this.right) count++
  return count
}

bstNode.prototype.getBalance = function() {
  let leftDepth = this.left ? this.left.maxDepth() : 0
  let rightDepth = this.right ? this.right.maxDepth() : 0
  return leftDepth - rightDepth
}

bstNode.prototype._isLeftChild = function() {
  if(!this.parent) return
  return this.parent.left === this ? true : false
}

bstNode.prototype._rotateRight = function() {
  let pivot = this.left
  if(!pivot) return
  this.val = pivot.val
  pivot.val = this.val
  this.left = pivot.left
  if(this.left) this.left.parent = this
  pivot.left = pivot.right
  if(pivot.left) pivot.left.parent = pivot
  pivot.right = this.right
  if(pivot.right) pivot.right.parent = pivot
  this.right = pivot
  pivot.parent = this
}

bstNode.prototype._rotateLeft = function() {
  let pivot = this.right
  if(!pivot) return
  this.val = pivot.val
  pivot.val = this.val
  this.right = pivot.right
  if(this.right) this.right.parent = this
  pivot.right = pivot.left
  if(pivot.right) pivot.right.parent = pivot
  pivot.left = this.left
  if(pivot.left) pivot.left.parent = pivot
  this.left = pivot
  pivot.parent = this
}

bstNode.prototype._selfBalance = function() {
  let balance = this.getBalance()
  if(balance === 2) {
    if(this.left.getBalance() <= -1) this.left._rotateLeft()
    this._rotateRight()
    if(this.parent) this.parent._selfBalance()
  } else if(balance === -2) {
    if(this.right.getBalance() >= 1) this.right._rotateRight()
    this._rotateLeft()
    if(this.parent) this.parent._selfBalance()
  } else {
    if(this.parent) this.parent._selfBalance()
  }
}

bstNode.prototype.breadthFirst = function() {
  let queue = [this]
  let result = ''
  let current

  while(queue.length > 0) {
    current = queue.pop()
    result += current.val + ' '
    if(current.left) queue.unshift(current.left)
    if(current.right) queue.unshift(current.right)
  }

  return result
}

bstNode.prototype.preOrder = function(cb) {
  _walk(this)

  function _walk(node) {
    if(!node) return
    cb(node)
    this.preOrder(node.left)
    this.preOrder(node.right)
  }
}

bstNode.prototype.inOrder = function(cb) {
  _walk(this)

  function _walk(node) {
    if(!node) return
    this.inOrder(node.left)
    cb(node)
    this.inOrder(node.right)
  }
}

bstNode.prototype.postOrder = function(cb) {
  _walk(this)

  function _walk(node) {
    if(!node) return
    postOrder(node.left)
    postOrder(node.right)
    cb(node)
  }
}
