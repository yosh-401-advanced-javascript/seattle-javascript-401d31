'use strict';

const DataModel = require('../file.js');

class People extends DataModel {
  constructor() {
    let dataFile = `${__dirname}/db.json`;
    super(dataFile);
  }

  schema() {
    return {
      id: { required: true, type: 'string' },
      firstName: { required: true, type: 'string' },
      lastName: { required: true, type: 'string' },
      age: { required: true, type: 'number' }
    }
  }

  static sampleRecord() {
    return {
      "firstName": "Test",
      "lastName": "User",
      "age": 50
    }
  }

}

module.exports = People;