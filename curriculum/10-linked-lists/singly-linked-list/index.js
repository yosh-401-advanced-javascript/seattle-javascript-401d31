'use strict';

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  append(value) {
    if (!this.root) {
      this.root = new ListNode(value);
      return
    }

    // start with a pointer at the root
    let current = this.root;

    // step forward node-by-node until one has
    // an empty next value
    while (current.next) {
      current = current.next;
    }

    // add the new value to the empty .next spot
    // that's at the end of the list
    current.next = new ListNode(value);
  }

  prepend(value) {
    // make a new node with the value
    // have the new node point to the current root.
    // replace the root with the new node.
    let node = new ListNode(value);
    node.next = this.root;
    this.root = node;
  }

  remove(value) {
    // rewrite the root node if the value is at the front.
    if(this.root.value === value) {
      let result = this.root;
      this.root = this.root.next;
      return result;
    }

    // start at the front
    // look for a node that points to the node we want to remove.
    let current = this.root;
    while (current.next.value !== value) {
      current = current.next;
    }

    // save the result
    // make the current node point to the node after the node we're removing
    let result = current.next;
    current.next = current.next.next;
    return result;
  }

  reduce(list, cb, result) {
    let i=0;
    let current = list
    while(current){
      result = cb(result, current, i++, list);
      current = current.next;
    }
    return result;
  }

  map(list, cb) {
    let result = SLL.reduce(list, (prev, curr, i , self) => {
      prev.append(new SLL(cb(curr, i, self)))
      return prev;
    }, new SLL())
    return result.next;
  }

  filter(list, cb) {
    let result = SLL.reduce(list, (prev, curr, i, self) => {
      if(cb(curr, i, self)) {
        prev.append(new SLL(curr.value));
      }
      return prev;
    }, new SLL())
    return result.next;
  }

  find(value) {
    let current = this.root;
    while(current){
      if(current.value === value)
        return current;
      current = current.next;
    }
  }

  reverse() {
    let rest = this.root.next;
    let result = this.root;
    result.next = null;

    let _reverse = (node) => {
      let rest = node.next
      let temp = node 
      temp.next = null
      result = SLL.prepend(result, temp)
      if(rest) _reverse(rest)
    }

    _reverse(rest);
    return result;
  }

  getMiddle(list) {
    let slow = this.root;
    let fast = this.root;
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next
    }
    return slow
  }

  getNthFromLast(n) {
    var i;
    let result = list;
    let offset = list;
    for(i=0; i<n && offset.next; i++) {
      offset = offset.next 
    }
    while(offset.next){
      result = result.next;
      offset = offset.next
    }
    return result
  }

  getLast() {
    return this.getNthFromLast(0);
  }
  getSecondFromLast() {
    return this.getNthFromLast(1);
  }
  getThirdFromLast() {
    return this.getNthFromLast(2);
  }

  getNth(n) {
    // step forward N times.
    let current = this.root;
    for(let i = 0; i < n; i++) {
      current = current.next;
    }
    return current;
  }

  getFirst() {
    return this.getNth(0);
  }

  getSecond() {
    return this.getNth(1);
  }

  getThird() {
    return this.getNth(2);
  }

  fromArray(items) {
    // Build the list up backwards.
    // Start by creating the last node that points to nothing.
    // Then make the second-to-last node and point it
    // to the last node.
    // Then make another node and point it to the second-to-last node.
    // Do this until the list is entirely built up.
    let previousNode = null
    for (var i = items.length - 1; i >= 0; i--) {
      let value = items[i];
      let node = new ListNode(value);
      node.next = previousNode;
      previousNode = node;
    }

    // set the root to point to the last node added at the front of the chain.
    this.root = previousNode;

    // return a reference to this list.
    return this;
  }
}

module.exports = {LinkedList, ListNode}