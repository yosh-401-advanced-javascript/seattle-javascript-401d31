'use strict';

const debug = require('debug')('noteapp:note-controller');
const Note = require('../model/note');
const storage = require('../lib/storage');
const httpError = require('http-errors');

exports.createNote = function(content){
    debug('createNote');
    if (!content)
      return Promise.reject(httpError(400, 'note needs content'));
    const note = new Note(content);
    return storage.setItem('note', note);
};

exports.fetchNote = function(id){
  debug('fetchNote');
  return storage.fetchItem('note', id);
};

exports.deleteNote = function(id){
  debug('deleteNote');
  return storage.deleteItem('note', id);
};

exports.updateNote = function(id, content){
  return new Promise(function(resolve, reject){
    debug('updateNote');
    if (!content) reject(httpError(400, 'must provide content'));
    storage.fetchItem('note', id)
    .then( note => {
      note.content = content;
      return storage.setItem('note', note);
    })
    .then( note => resolve(note))
    .catch( err => reject(err));
  });
};
