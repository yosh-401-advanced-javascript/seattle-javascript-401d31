'use strict';

const DataModel = require('../file.js');

class People extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      firstName: { required: true },
      lastName: { required: true },
      age: { required: true }
    };
  }
}

module.exports = People;