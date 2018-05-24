'use strict';

const storage = require('../lib/storage');
const uuid = require('uuid/v1');

class Note{

  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.title = config && config.title || '';
    this.content = config && config.content || '';
  }

  save() {
    return storage.save(this);
  }

  fetchAll() {
    return storage.getAll();
  }

  findOne(id) {
    return storage.get(id);
  }

  updateOne(criteria) {
    return storage.update(this);
  }

  deleteOne(id) {
    return storage.delete(id);
  }

}

module.exports = Note;
