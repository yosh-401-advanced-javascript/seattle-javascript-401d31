'use strict';

const Node = require('./node');

const List = module.exports = function(){
  this.head = null;
};

List.createListFromArray = function(array){
  const list = new List();
  array.forEach(function(value){
    list.addNodeWithValue(value);
  });
  return list;
};

List.prototype.addNodeWithValue = function(value){
  const node = new Node(value)

  if (!this.head){
    this.head = node;
    return;
  }

  this.head.addNode(node);
};

List.prototype.removeFirstNode = function(){
  if (this.head && this.head.next){
    this.head = this.head.next;
    return;
  }
  this.head = null;
};

List.prototype.removeLastNode = function(){
  var current = this.head;
  var done = false;

  if (this.head) {
    var last = this.head;
    if (this.head.next){
      var current = this.head.next
      while(!done){
        if (!current.next) {
          done = true;
          continue;
        }
        last = current;
        current = current.next;
      }
      last.next = null;
      return;
    }
    this.head = null;
  }
};

List.prototype.toString = function(){
  var current = this.head;
  var result = 'List < ';
  if (current){
    while (current){
      result += `${current.value} `
      current = current.next;
    }
  }
  result += '>';
  return result;
};

List.prototype.forEach = function(callback){
  let current = this.head;
  let count = 0;
  while(current){
    callback(current.value, count++, this);
    current = current.next;
  }
};

List.prototype.map = function(callback){
  let result = new List();
  let current = this.head;
  let count = 0;

  while(current){
    result.addNodeWithValue(callback(current.value, count++, this));
    current = current.next;
  }

  return result;
};

List.prototype.filter = function(callback){
  let result = new List();
  let current = this.head;
  let count = 0;

  while(current){
    if(callback(current.value, count++, this)){
      result.addNodeWithValue(current.value);
    }
    current = current.next;
  }

  return result;
}

List.prototype.reduce = function(callback){
  if (!this.head) return null
  if (this.head && !this.head.next) return this.head.value
  let current = this.head.next
  var result = this.head.value;
  let count = 0

  while(current){
    result = callback(result, current.value, count++, this)
    current = current.next
  }

  return result
}
