'use strict'

const assert = require('assert')
const calc = require('../lib/calculator')

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
})
