'use strict'

const TreeNode = module.exports = class {
  constructor(val) {
    this.val = val
    this.children = []
  }

  breadthFirst(cb) {
    let queue = [this]
    let result = '' // This is just a readable output/verification that the traversal works...
    let current

    while(queue.length > 0) {
      current = queue.shift()
      result += current.val + ' ' // not required to print this output
      cb(current)
      if(current.children.length) queue = [...queue, ...current.children]
    }
    return result
  }

  preOrder(cb) {
    _walk(this)

    function _walk(node) {
      cb(node)
      node.children.forEach(_walk)
    }
  }

  insert(newNode, parentVal) {
    if(!newNode instanceof TreeNode) throw new Error('node must be instance of TreeNode')

    this.preOrder(node => {
      if(!node) return

      if(node.val === parentVal) {
        node.children.push(newNode)
      }
      return this
    })
  }

  prune(val) {
    let target, idx

    this.preOrder(node => {
      if(!node) return
      node.children = node.children.filter(child => child.val !== val)
    })
  }

  findNodes() {
    let results = []
    this.preOrder((node) => {
      if(!node) return
      results.push(node.val)
    })
    return results
  }
}