'use strict'

const axios = require('axios');
const expect = require('expect');

const serverControl = require('./lib/server-control.js');
const mockUser = require('./lib/mock-user.js');

const API_URL = process.env.API_URL || 'http://localhost:3000';

describe('testing user routes', function(){
  before(serverControl.start);
  after(serverControl.stop);
  afterEach(mockUser.remove);

  it('should create a user and create a token', function(){
    let data = {
      username: 'joey',
      email: 'joey@jeoy.com',
      password: 'password',
    };

    return axios.post(`${API_URL}/auth/signup`, data)
    .then(res => {

      expect(res.status).toEqual(200);
      expect(res.data.length).toEqual(105);
    });
  });

  describe('testing POST /auth/login', function(){
    before(mockUser.create)

    it('should login a user and create a token', function(){
      let encoded = new Buffer(`${this.tempUser.username}:password`).toString('base64');
      var options = {
        headers: {
          Authorization: `Basic ${encoded}`
        }
      };

      return axios.get(`${API_URL}/auth/login`, options)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data.length).toEqual(105);
      });
    });
  });
  
});
