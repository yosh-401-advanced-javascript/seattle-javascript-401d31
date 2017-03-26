'use strict';

const expect = require('chai').expect;
const List = require('../lib/list');
const Node = require('../lib/node');

describe('testing module list', function(){
  describe('testing static method createListFromArray', function(){
    it('should return a list', function(){
      const list = List.createListFromArray([1,2,3]);
      expect(list instanceof List).to.equal(true);
      expect(list.head.value).to.equal(1);
      expect(list.head.next.value).to.equal(2);
      expect(list.head.next.next.value).to.equal(3);
      expect(list.head.next.next.next).to.equal(null);
    });
  });

  describe('testing prototype method addNodeWithValue', function(){
    it('should return add two nodes to an empty list', function(){
      const list = new List();
      list.addNodeWithValue(1);
      list.addNodeWithValue(2);
      expect(list.head.value).to.equal(1);
      expect(list.head.next.value).to.equal(2);
      expect(list.head.next.next).to.equal(null);
    });
  });

  describe('testing prototype method removeFirstNode', function(){
    it('should remove the first node from a list', function(){
      const list = List.createListFromArray([1,2,3]);
      list.removeFirstNode();
      expect(list.head.value).to.equal(2);
      expect(list.head.next.value).to.equal(3);
    });
  });

  describe('testing prototype method removeLastNode', function(){
    it('should remove the last node from a list', function(){
      const list = List.createListFromArray([1,2,3]);
      list.removeLastNode();
      expect(list.head.value).to.equal(1);
      expect(list.head.next.value).to.equal(2);
      expect(list.head.next.next).to.equal(null);
    });
  });

  describe('testing prototype method forEach', function(){
    it('should invoke callback for each node', function(){
      const list = List.createListFromArray([1,2,3]);
      const result = [];
      list.forEach((value, index) => {
        result[index] = value;
      });
      expect(result[0]).to.equal(1);
      expect(result[1]).to.equal(2);
      expect(result[2]).to.equal(3);
    });
  });

  describe('testing prototype method map', function(){
    it('should return a new list', function(){
      var list = List.createListFromArray([1,2,3]);
      list = list.map((value) => {
        return value * 2;
      });
      expect(list instanceof List).to.equal(true);
      expect(list.head.value).to.equal(2);
      expect(list.head.next.value).to.equal(4);
      expect(list.head.next.next.value).to.equal(6);
      expect(list.head.next.next.next).to.equal(null);
    });
  });

  describe('testing prototype method filter', function(){
    it('should return a new list', function(){
      var list = List.createListFromArray([1,2,3,4]);
      list = list.filter((value) => {
        if ( value > 2) return true;
        return false;
      });
      expect(list instanceof List).to.equal(true);
      expect(list.head.value).to.equal(3);
      expect(list.head.next.value).to.equal(4);
      expect(list.head.next.next).to.equal(null);
    });
  });

  describe('testing prototype method reduce', function(){
    it('should return 10', function(){
      const list = List.createListFromArray([1,2,3,4]);
      const result = list.reduce((prev, next) => {
        return prev + next;
      });
      expect(result).to.equal(10);
    });
  });

});
