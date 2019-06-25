const faker = require('faker');
const People = require('../people/people.js');
// Others ....

jest.mock('fs');

describe('Data Model', () => {

  let Implementation;
  let model;
  let record;

  let implementations = {
    'People, Filesystem': People,
  };

  beforeEach(() => {
    let Model = implementations[Implementation];
    let sampleRecord = Model.sampleRecord();
    model = new Model();
    return model.create(sampleRecord)
      .then(newRecord => record = newRecord)
      .catch(e => console.error('ERR', e));
  });

  afterEach(() => {
    return model.delete(record.id)
      .then(records => record = records)
      .catch(e => console.error('ERR', e));
  });

  for (Implementation in implementations) {

    it('sanitize() validates a good record', () => {
      // Go through the schema and fill in perfect values for every field
      const schema = model.schema();
      var testRecord = {};
      for (var field in schema) {
        switch (schema[field].type) {
          case "boolean":
            testRecord[field] = faker.random.boolean();
            break;
          case "number":
            testRecord[field] = faker.random.number();
            break;
          case "string":
            testRecord[field] = faker.random.word();
            break;
          default:
            null
        }
      }
      expect(model.sanitize(testRecord)).toEqual(testRecord);
    });

    it('sanitize() returns undefined on type mismatch', () => {
      // Go through the schema and fill in perfect values for every field
      const schema = model.schema();
      var testRecord = {};
      for (var field in schema) {
        switch (schema[field].type) {
          case "boolean":
            testRecord[field] = faker.random.number();
            break;
          case "number":
            testRecord[field] = faker.random.word();
            break;
          case "string":
            testRecord[field] = faker.random.number();
            break;
          default:
            null
        }
      }
      expect(model.sanitize(testRecord)).toEqual("Invalid Record");
    });

    it('sanitize() returns undefined with missing requirements', () => {
      // Go through the schema and fill in perfect values for every field
      const schema = model.schema();
      var testRecord = {};
      for (var field in schema) {
        if (schema[field].required) {
          testRecord[field] = null;
        }
      }
      expect(model.sanitize(testRecord)).toEqual("Invalid Record");
    });

    it('can post() a new record to a model', () => {
      expect(record.id).toBeDefined();
    });

    it('can get() a record from a model', () => {
      return model.get(record.id)
        .then(records => {
          Object.keys(record).forEach(key => {
            expect(records[0][key]).toEqual(record[key]);
          });
        });
    });

    it('can update() a record in a model', () => {
      let changedRecord = { ...record };
      return model.update(record.id, changedRecord)
        .then(updatedRecord => {
          Object.keys(changedRecord).forEach(key => {
            expect(updatedRecord[key]).toEqual(changedRecord[key]);
          });
        })
        .catch(e => expect(e).not.toBeDefined());
    });

    it('can delete() a record from a model', () => {
      return model.delete(record.id)
        .then(records => {
          expect(records).toEqual({});
        })
        .catch(e => console.error('ERR', e));
    });

  }

});