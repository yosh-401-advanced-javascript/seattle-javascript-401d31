'use strict'

const greet = require('../lib/greet')
require('jest')

describe('GREET Module', () => {
  it('should return "Hello <name>"', () => {
    expect(greet('Scott')).toBe('Hello Scott')
  })
  it('should accept a single argument', () => {
    expect(greet('Scott', 'Schmidt')).toBe('Hello Scott')
  })
  it('should return null if input is not a String', () => {
    expect(greet(432)).toBeNull()
    expect(greet(true)).toBeNull()
  })
  it('should return null if no input is provided', () => {
    expect(greet()).toBeNull()
  })
})