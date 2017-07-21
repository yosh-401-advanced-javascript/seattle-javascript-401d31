'use strict'

const axios = require('axios');
const expect = require('expect');
const serverControl = require('./lib/server-control.js');
const mockBudgetProfile = require('./lib/mock-budget-profile.js');

const API_URL = `${process.env.API_URL}/budget/profiles` || 'http://localhost:3000/budget/profiles';

describe('teesting budget profile', function(){
  before(serverControl.start);
  after(serverControl.stop);
  afterEach(mockBudgetProfile.remove.bind(this));

  describe('testing mockBudgetProfile.create', function(){
    before(mockBudgetProfile.create.bind(this));
    it('should create a profile', () => {
      expect(this.tempProfile._id).toExist();
      expect(this.tempProfile.name.startsWith('example')).toEqual(true);
      expect(this.tempProfile.total).toBeGreaterThan(50);
      expect(this.tempProfile.categorys).toEqual(['food', 'house']);
    });
  });

  describe('POST /budget/profiles', function(){
    it('should create a profile', () => {
      return axios.post(API_URL, {
        name: 'cool beans',
        total: 150.20,
        categorys: ['car', 'food'],
      })
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data.name).toEqual('cool beans');
        expect(res.data.total).toEqual(150.20);
        expect(res.data.categorys).toEqual(['car', 'food']);
      });
    });
  });

  describe('PUT /budget/profiles/:name', function(){
    before(mockBudgetProfile.create.bind(this));

    it('should update a profile', () => {
      return axios.put(`${API_URL}/${this.tempProfile.name}`, {
        name: 'cool beans',
        total: 150.20,
        categorys: ['car', 'food'],
      })
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data._id).toEqual(this.tempProfile._id);
        expect(res.data.name).toEqual('cool beans');
        expect(res.data.total).toEqual(150.20);
        expect(res.data.categorys).toEqual(['car', 'food']);
      });
    });
  });

  describe('GET /budget/profiles/:name', function(){
    before(mockBudgetProfile.create.bind(this));

    it('should update a profile', () => {
      return axios.get(`${API_URL}/${this.tempProfile.name}`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data._id).toEqual(this.tempProfile._id);
        expect(res.data.name).toEqual(this.tempProfile.name);
        expect(res.data.total).toEqual(this.tempProfile.total);
        expect(res.data.categorys).toEqual(this.tempProfile.categorys);
      });
    });
  });
  describe('DELETE /budget/profiles/:name', function(){
    before(mockBudgetProfile.create.bind(this));

    it('should update a profile', () => {
      return axios.delete(`${API_URL}/${this.tempProfile.name}`)
      .then(res => {
        expect(res.status).toEqual(204);
      });
    });
  });
});


