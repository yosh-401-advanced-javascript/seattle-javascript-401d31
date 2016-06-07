'use strict';

const response = require('../lib/response');
const noteController = require('../controller/note-controller');
const debug = require('debug')('noteapp:note-route');

module.exports = function(router){
  router
  .post('/api/note', function(req, res){
    debug('POST /api/note');
    if (req.body) {
      if (!req.body.content)
        return response(400, 'bad request', res);
      noteController.createNote(req.body.content)
      .then( note => response(200, note, res))
      .catch( err => response(500, 'internal server error', res));
      return;
    }
    response(400, 'bad request')(res);
  })
  .get('/api/note', function(req, res){
    debug('GET /api/note?id=__')
    if (req.url.query.id){
      noteController.fetchNote(req.url.query.id)
      .then( note => response(200, note, res))
      .catch( err => response(404, 'not found', res));
      return;
    }
    response(404, 'not found')(res);
  })
  .put('/api/note', function(req, res){
    debug('PUT /api/note?id=__');
    if(req.url.query.id && req.body.content){
      noteController.updateNote(req.url.query.id, req.body.content)
      .then( note => response(200, note, res))
      .catch (err => response(400, 'bad request', res));
      return;
    }
    response(404, 'not found')(res);
  })
  .delete('/api/note', function(req, res){
    if (req.url.query.id){
      noteController.deleteNote(req.url.query.id)
      .then( () => response( 204, '', res))
      .catch( err => response(404, 'not found', res));
      return;
    }
    response(404, 'not found')(res);
  });

};
