'use strict';

const events = require('../lib/events');
const logger = require('../lib/logger.js');

describe('logger', () => {

  it('throws an error on file-error with payload', () => {
    let spy = jest.spyOn(console, 'error');
    logger.err('foo');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('ignores errors on file-error without payload', () => {
    let spy = jest.spyOn(console, 'error');
    logger.err();
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('logs the payload on file-save', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save('foo');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('does not log the payload on file-save without payload', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save();
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

});
