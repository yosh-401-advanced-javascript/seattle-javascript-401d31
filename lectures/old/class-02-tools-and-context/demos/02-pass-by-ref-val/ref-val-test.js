'use strict';

const expect = require('chai').expect;

describe('testing behavior of data passed by value', function() {
  describe('testing that numbers are passed by value', function(){
    it('abc should not change when xyz is changed', () =>  {
      let abc = 2;

      let xyz = abc;
      xyz += 10;
      expect(abc).to.equal(2);
      expect(xyz).to.equal(12);
    });
  });

  describe('testing that strings are passed by value', function(){
    it('abc should not change when xyz is changed', () =>  {
      let abc = 'hello';
      let xyz = abc;
      xyz += ' world';
      expect(abc).to.equal('hello');
      expect(xyz).to.equal('hello world');
    });
  });

  describe('testing that booleans are passed by value', function(){
    it('abc should not change when xyz is changed', () =>  {
      let abc = true;
      let xyz = abc;
      xyz = !xyz;
      expect(abc).to.equal(true);
      expect(xyz).to.equal(false);
    });
  });

  describe('testing that objects are passed by reference', function(){
    it('abc should not change when xyz is mutated', () =>  {
      let abc = {
        info: 'this is useful',
      };

      // reference abc with xzy
      let xyz = abc;
      // mutate xyz
      xyz.info = 'look how interesting';
      xyz.data = 6000;

      expect(abc).to.equal(xyz);
      expect(abc.info).to.equal('look how interesting');
      expect(abc.data).to.equal(6000);
      expect(xyz.info).to.equal('look how interesting');
      expect(xyz.data).to.equal(6000);
    });
  });

  describe('testing that objects are passed by value', function(){
    it('abc should not change when xyz is reassigned', () =>  {
      let abc = {
        info: 'this is useful',
      };

      // reference abc with xzy
      let xyz = abc;

      // reassign xyz
      xyz = {
        info: 'cool er than cool',
      }

      expect(abc).to.not.equal(xyz);
      expect(abc.info).to.equal('this is useful');
      expect(xyz.info).to.equal('cool er than cool');
    });
  });
});
