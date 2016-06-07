'use strict';

const errorResponse = require('../lib/error-response');
const response = require('../lib/response');
const noteController = require('../controller/note-controller');
const debug = require('debug')('noteapp:note-route');

module.exports = function(router){
  router
  .post('/api/note', function(req, res){
    debug('POST /api/note');
    noteController.createNote(req.body.content)
    .then( note => response(200, note, res))
    .catch( err => errorResponse(err, res));
  })
  .get('/api/note', function(req, res){
    debug('GET /api/note?id=__')
    noteController.fetchNote(req.url.query.id)
    .then( note => response(200, note, res))
    .catch( err => errorResponse(err, res));
  })
  .put('/api/note', function(req, res){
    debug('PUT /api/note?id=__');
    noteController.updateNote(req.url.query.id, req.body.content)
    .then( note => response(200, note, res))
    .catch( err => errorResponse(err, res));
  })
  .delete('/api/note', function(req, res){
    noteController.deleteNote(req.url.query.id)
    .then( () => response( 204, '', res))
    .catch( err => response(404, 'not found', res));
  });
};
