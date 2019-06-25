const Categories = require('../categories/categories.js');
// Others ....

describe('Data Model', () => {

  let Implementation;
  let model;
  let record;

  let implementations = {
    'Categories, In-Memory': Categories,
  };

  beforeEach(() => {
    model = new implementations[Implementation]();
    let obj = { name: 'Test Record' };
    return model.create(obj)
      .then(newRecord => record = newRecord)
      .catch(e => console.error('ERR', e));
  });

  afterEach(() => {
    return model.delete(record.id)
      .then(records => record = records)
      .catch(e => console.error('ERR', e));
  });

  for (Implementation in implementations) {

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
      let obj = {
        id: record.id,
        name: 'New Name'
      };
      return model.update(record.id, obj)
        .then(updatedRecord => {
          Object.keys(obj).forEach(key => {
            expect(updatedRecord[key]).toEqual(obj[key]);
          });
        });
    });

    it('can delete() a record from a model', () => {
      return model.delete(record.id)
        .then(records => {
          expect(records).toBeUndefined();
        })
        .catch(e => console.error('ERR', e));
    });

  }

});