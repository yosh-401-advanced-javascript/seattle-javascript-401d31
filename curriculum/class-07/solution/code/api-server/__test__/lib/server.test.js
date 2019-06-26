'use strict';

const { server } = require('../../lib/server.js');
const supergoose = require('../supergoose.js');
const mockRequest = supergoose(server);

describe('web server', () => {

  it('should respond with a 500 on an error', () => {

    return mockRequest
      .put('/categories/0')
      .expect(500);

  });

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .expect(404);
  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .expect(404);

  });

  it('should respond properly on request to /categories', () => {

    return mockRequest
      .get('/categories')
      .expect(200);

  });

});
