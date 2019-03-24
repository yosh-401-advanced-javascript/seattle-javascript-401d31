'use strict';

const supertest = require('supertest');
const {server} = require('../server.js');

const mockClient = supertest(server);

describe('Middleware', () => {

  it('barf ... calls next() with a message to kick off an error', () => {
  });

  it('404 sends a status of 404', () => {

  });

  it('404 sends a message of Not Found', () => {

  });

  it ('404 does not call next()', () => {

  });

  it('500 sends a status of 500', () => {

  });

  it('500 sends an error message', () => {

  });

  it ('500 does not call next()', () => {

  });

});

describe('The Server', () => {
  it('responds with a 200 on a good route', () => {

  });

  it('responds with a 500 on an error', () => {

  });

  it('responds with a 404 on an unknown route', () => {

  });
  
});
