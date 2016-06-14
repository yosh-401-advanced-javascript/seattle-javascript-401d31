'use strict';
const Node = require('./node');

var Tree = module.exports = function(value){
  this.top = null;
  if (value){
    this.top = new Node(value);
  }
};

Tree.prototype.depthFirstPrint = function(pad){
  if (!this.top) return console('EMPTY TREE');
  _depthFirstPrint(this.top);

  function _depthFirstPrint(node, pad){
    pad = pad || '';
    console.log(`${pad}${node.value}`);
    node.children.forEach(function(child){
      _depthFirstPrint(child, pad + '  ');
    });
  }
};
