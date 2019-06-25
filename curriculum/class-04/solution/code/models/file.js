'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Model {

  constructor(dataFile) {
    this.dataFile = dataFile;
  }

  /**
   * Every method needs to load the db before it can do it's work
   * This method is tested through the others, not directly
   *  -- that is an integration test!
   *
   * @returns
   * @memberof Model
   */
  async load() {
    try {
      const raw = await readFile(this.dataFile);
      return JSON.parse(raw.toString());
    }
    // Default to an empty array, file will auto create itself :)
    catch (e) { return []; }
  }

  /**
   * Save the database array to a file
   * Every method needs to save the db after they run
   * This method is tested through the others, not directly
   *  -- that is an integration test!
   *
   * @param {*} db
   * @returns
   * @memberof Model
   */
  async save(db) {
    try {
      const buffer = Buffer.from(JSON.stringify(db));
      const saved = await writeFile(this.dataFile, buffer);
      return true;
    }
    catch (e) { return false; }
  }


  /**
   * Gets one record (given an id) or all records from the DB
   *
   * @param {*} id
   * @returns
   * @memberof Model
   */
  async get(id) {
    try {
      let db = await this.load();
      let result = id ? db.filter((item) => item.id === id) : db;
      return result;
    }
    catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * Create a new record
   * Async methods are technically promises,
   * so what they return is like a Promise.resolve()
   *
   * @param {*} entry
   * @returns
   * @memberof Model
   */
  async create(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    if (record) {
      let db = await this.load();
      db.push(record);
      const saved = await this.save(db);
      return saved ? record : Promise.reject();
    }
    else {
      return Promise.reject();
    }
  }


  /**
   * Update a record
   * Async methods are technically promises,
   * so what they return is like a Promise.resolve()
   *
   * @param {*} id
   * @param {*} entry
   * @returns
   * @memberof Model
   */
  async update(id, entry) {

    let record = this.sanitize(entry);

    if (record) {
      let db = await this.load();
      db = db.map((item) => (item.id === id) ? record : item);
      const saved = await this.save(db);
      return saved ? record : Promise.reject();
    }
    else {
      return Promise.reject();
    }

  }


  /**
   * Delete a record
   * Async methods are technically promises,
   * so what they return is like a Promise.resolve()
   *
   * @param {*} id
   * @returns
   * @memberof Model
   */
  async delete(id) {
    let db = await this.load();
    db = db.filter((item) => item.id !== id);
    const saved = await this.save(db);
    return saved ? {} : Promise.reject();
  }


  /**
   * Sanitize a record against the schema for the model
   *
   * @param {*} entry
   * @returns
   * @memberof Model
   */
  sanitize(entry) {

    // I wish this was a static thing on the sub-class
    let schema = this.schema();

    let valid = true;

    for (let field in schema) {

      // Am I required and set?
      let required = schema[field].required
        ? !!entry[field]
        : true;

      // Am I the right type (if we even care)
      let type = schema[field].type
        ? typeof entry[field] === schema[field].type
        : true;

      // If anything is false ...
      if (!(required && type)) { return 'Invalid Record'; }

    };

    return entry;
  }

}

module.exports = Model;