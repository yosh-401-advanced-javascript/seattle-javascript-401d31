'use strict';

// Our first facade ... the user doesn't care how this stack works, only that it does.
// We can swap out the "backend" for it all we want, so long as the interface & contract is unchnaged.

const stackConstructor = require('./stacks/constructor');
// const stackFactory = require("./stacks/factory");
// const stackSLL = require("./stacks/linked-list");
// const stackArray = require("./stacks/array");

module.exports = class stack {

  constructor() {
    this.stack = new stackConstructor();
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

};

------

'use strict';

const SLL = require('../singly-linked-list');

const Queue = module.exports = function(){
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(value){
  if(!this.head) {
    this.head = this.tail = new SLL(value);
    return this;
  }

  this.tail.append(new SLL(value))
  this.tail = this.tail.next;
  return this;
}

Queue.prototype.dequeue = function(){
  if(!this.head)
    return null;
  
  let result = this.head.value;
  if(this.head == this.tail) 
    this.head = this.tail = null
  else 
    this.head = this.head.next;

  return result;
}
