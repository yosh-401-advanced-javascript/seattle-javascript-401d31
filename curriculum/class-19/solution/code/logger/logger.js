'use strict';

const Q = require('@nmq/q/client');

const database = new Q('database');

database.subscribe('create', (payload) => {
  console.log(payload);
});

database.subscribe('update', (payload) => {
  console.log(payload);
});

database.subscribe('delete', (payload) => {
  console.log(payload);
});

database.subscribe('error', (payload) => {
  console.error(payload);
});
