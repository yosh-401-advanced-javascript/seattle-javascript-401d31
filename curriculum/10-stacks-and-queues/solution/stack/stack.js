'use strict';

// Our first facade ... the user doesn't care how this stack works, only that it does.
// We can swap out the "backend" for it all we want, so long as the interface & contract is unchnaged.

const stackConstructor = require('./lib/constructor');
// const stackFactory = require("./lib/factory");
// const stackSLL = require("./lib/linked-list");
// const stackArray = require("./lib/array");

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
