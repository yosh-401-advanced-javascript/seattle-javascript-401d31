'use strict';

const axios = require('axios');
const expect = require('expect');
const serverControl = require('./lib/server-control.js');
const mockKanbanCard = require('./lib/mock-kanban-card.js');

const API_URL = process.env.API_URL || 'http://localhost:3000';

describe('testing KanbanCard router', function(){
  before(serverControl.start);
  after(serverControl.start);
  afterEach(mockKanbanCard.remove);

  describe('mockKanbanCard.create', function(){
    before(mockKanbanCard.create.bind(this));

    it('should mock a konbanCard', (done) => {
      let card = this.tempKanbanCard;
      expect(card.title.startsWith('example')).toEqual(true);
      expect(card.state).toEqual(0);
      expect(card.comments).toEqual([]);
      done();
    });
  });

  describe('POST /kanban/card', function(){
    it('should create a konbanCard', () => {
      let card = {
        title: 'cool beans', 
        state: 1, 
        comments: [],
      };

      return axios.post(`${API_URL}/kanban/card`, card)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data.title).toEqual('cool beans');
        expect(res.data.state).toEqual(1);
        expect(res.data.comments).toEqual([]);
      });
    });
  });

  describe('GET /kanban/card', function(){
    before(mockKanbanCard.create.bind(this));
    before(mockKanbanCard.create.bind(this));
    before(mockKanbanCard.create.bind(this));

    it('should respond with 3 cards', () => {
      return axios.get(`${API_URL}/kanban/card`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data.length).toEqual(3);
      });
    });
  });

  describe('PUT /kanban/card/:id', function(){
    before(mockKanbanCard.create.bind(this));
    it('should update a card', () => {
      let updates = {title: 'awesome', state: 3};
      return axios.put(`${API_URL}/kanban/card/${this.tempKanbanCard._id}`, updates)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.data.title).toEqual('awesome');
        expect(res.data.state).toEqual(3);
      });
    });
  });

  describe('DELETE /kanban/card/:id', function(){
    before(mockKanbanCard.create.bind(this));
    it('should delete a card', () => {
      return axios.delete(`${API_URL}/kanban/card/${this.tempKanbanCard._id}`)
      .then(res => {
        expect(res.status).toEqual(204);
      });
    });
  });

});
