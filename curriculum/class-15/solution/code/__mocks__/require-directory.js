'use strict';

const phonyModelFunction = jest.fn( () => {
  return Promise.resolve({});
});

const mockModel = {
  default: {
    find: phonyModelFunction,
    delete: phonyModelFunction,
    put: phonyModelFunction,
    patch: phonyModelFunction,
    save: phonyModelFunction,
  },
};

module.exports =  (module, dir, options) => {
  if ( typeof dir !== 'string' ) { return {}; }
  return {
    'foo': {model: mockModel},
  };
};

