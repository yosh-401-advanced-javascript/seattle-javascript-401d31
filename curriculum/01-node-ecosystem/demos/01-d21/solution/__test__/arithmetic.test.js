'use strict'

const arithmetic = require('../lib/arithmetic')
require('jest')

describe('ARITHMETIC Module', () => {
  describe('#Add Method', () => {
    it('should return the sum of two numbers', () => {
      expect(arithmetic.add(1, 1)).toBe(2)
      expect(arithmetic.add(2, 4)).toBe(6)
    })
    it('should return null if either input is not a number', () => {
      expect(arithmetic.add(1, 'hello')).toBeNull()
      expect(arithmetic.add(2, false)).toBeNull()
    })
  })
  describe('#Sub Method', () => {
    it('should return the difference of two numbers', () => {
      expect(arithmetic.sub(1, 1)).toBe(0)
      expect(arithmetic.sub(2, 4)).toBe(-2)
    })
    it('should return null if either input is not a number', () => {
      expect(arithmetic.sub(1, 'hello')).toBeNull()
      expect(arithmetic.sub(2, false)).toBeNull()
    })
  })
})
