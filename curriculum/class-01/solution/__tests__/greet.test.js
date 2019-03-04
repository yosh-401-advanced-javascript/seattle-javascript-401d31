'use strict';

const greet = require('../lib/greet.js');

describe('Greet Module', () => {

  // Tests are documentation.  Is there any need to comment what these are doing?  NOT.
  it('requires at least one param', () => {
    expect( greet() ).toBeNull();
  });

  it('requires only one param', () => {
    expect( greet('john','cathy') ).toBeNull();
  });

  it('disallows numbers', () => {
    expect( greet(1) ).toBeNull();
  });

  it('disallows arrays', () => {
    expect( greet([]) ).toBeNull();
  });

  it('disallows objects', () => {
    expect( greet({}) ).toBeNull();
  });

  it('disallows boolean (false)', () => {
    expect( greet(false) ).toBeNull();
  });

  it('disallows boolean (true)', () => {
    expect( greet(true) ).toBeNull();
  });

  it('properly greets a person', () => {
    expect( greet('john') ).toEqual('Hello, john');
  });

});


