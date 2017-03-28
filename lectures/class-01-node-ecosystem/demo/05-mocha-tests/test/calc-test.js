'use strict'

const assert = require('assert')
const calc = require('../lib/calculator')

// REVIEW: Pattern for creating tests
// describe('the module', function() {
//   describe('the method', function() {
//     it('should do something', function() {
//       // assert all the things
//     })
//   })
// })

describe('calculator.js', function() {
  describe('calc.add()', function() {
    it('should return the sum total of 2 + 2; 4', function() {
      assert.equal(calc.add(2, 2), 4)
    })
    it('should return a valid integer', function() {
      assert.equal(typeof calc.add(3, 4), 'number')
    })
    it('should throw Error if no arguments provided', function() {
      assert.throws(() => {
        calc.add()
      }, Error)
    })
  })

  describe('calc.sub()', function() {
    it('should return the remainder of 4 - 2; 2', function() {
      assert.equal(calc.sub(4, 2), 2)
    })
    it('should return a valid integer', function() {
      assert.equal(typeof calc.sub(3, 4), 'number')
    })
    it('should throw Error if no arguments provided', function() {
      assert.throws(() => {
        calc.sub()
      }, Error)
    })
  })

  // REVIEW: We wrote this first to fail the tests... Then write the code to pass.
  describe('calc.mult()', function() {
    it('should return the product of 10 * 2.5; 25', function() {
      assert.equal(calc.mult(10, 2.5), 25)
    })
    it('should return a valid integer', function() {
      assert.equal(typeof calc.mult(2, 4), 'number')
    })
    it('should throw Error if no arguments provided', function() {
      assert.throws(() => {
        calc.mult()
      }, Error)
    })
  })
})
