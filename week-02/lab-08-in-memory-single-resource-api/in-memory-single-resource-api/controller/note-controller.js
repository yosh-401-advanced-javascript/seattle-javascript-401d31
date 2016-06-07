'use strict';

const debug = require('debug')('noteapp:note-controller');
const Note = require('../model/note');
const storage = require('../lib/storage');

exports.createNote = function(content){
  debug('createNote');
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
    if (!content) reject(new Error('must provide content'));
    storage.fetchItem('note', id)
    .then( note => {
      note.content = content;
      return storage.setItem('note', note);
    })
    .then( note => resolve(note))
    .catch( err => reject(err));
  });
};
