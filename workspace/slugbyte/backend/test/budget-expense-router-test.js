'use strict';

const axios = require('axios');
const expect = require('expect');
const serverControl = require('./lib/server-control.js');
const mockBudgetProfile = require('./lib/mock-budget-profile.js');
const mockBudgetExpense = require('./lib/mock-budget-expense.js');

const API_URL = `${process.env.API_URL}/budget/expenses` || 'http://localhost:3000/budget/expenses';

describe('testing BudgetExpense', function(){
  before(serverControl.start);
  after(serverControl.stop);
  afterEach(mockBudgetExpense.remove);
  afterEach(mockBudgetProfile.remove);

  describe('testing mockBudgetExpense.create', function(){
    before(mockBudgetProfile.create.bind(this));
    before(mockBudgetExpense.create.bind(this));
    it('should create a BudgetExpense', () => {
      expect(this.tempExpense._id).toExist();
      expect(this.tempExpense.title.startsWith('example')).toEqual(true);
      expect(this.tempExpense.price).toBeGreaterThan(10);
      expect(this.tempExpense.category).toEqual('food');
      expect(this.tempExpense.profile).toEqual(this.tempProfile.name);
    });
  });

  describe('POST /api/expenses', function(){
    before(mockBudgetProfile.create.bind(this));

    it('should create a expense', () => {
      let data = {
        profile: this.tempProfile.name,
        category: this.tempProfile.categorys[0],
        title: 'cool beans', 
        price: 50.50,
      };

      return axios.post(API_URL, data)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data._id).toExist();
        expect(res.data.title).toEqual('cool beans');
        expect(res.data.profile).toEqual(data.profile);
        expect(res.data.price).toEqual(50.50);
        expect(res.data.category).toEqual(data.category);
      });
    });
  });

  describe('PUT /api/expenses/:id', function(){
    before(mockBudgetProfile.create.bind(this));
    before(mockBudgetExpense.create.bind(this));

    it('should create a expense', () => {
      let data = {
        title: 'cool beans', 
        price: 50.50,
      };

      return axios.put(`${API_URL}/${this.tempExpense._id}`, data)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data._id).toExist();
        expect(res.data.price).toEqual(50.50);
        expect(res.data.title).toEqual('cool beans');
        expect(res.data.profile).toEqual(this.tempProfile.name);
        expect(res.data.category).toEqual(this.tempProfile.categorys[0]);
      });
    });
  });

  describe('GET /api/expenses/:profileName', function(){
    before(mockBudgetProfile.create.bind(this));
    before(mockBudgetExpense.create.bind(this));
    before(mockBudgetExpense.create.bind(this));
    before(mockBudgetExpense.create.bind(this));

    it('should create a expense', () => {
      return axios.get(`${API_URL}/${this.tempProfile.name}`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data.length).toEqual(3);
      });
    });
  });

  describe('DELETE /api/expenses/:id', function(){
    before(mockBudgetProfile.create.bind(this));
    before(mockBudgetExpense.create.bind(this));

    it('should create a expense', () => {
      return axios.delete(`${API_URL}/${this.tempExpense._id}`)
      .then(res => {
        expect(res.status).toEqual(204);
      });
    });
  });
});
