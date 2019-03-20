'use strict'; 

const util = require('util');

let doerOfThings = ( thingsToDo, cb ) => {
  console.log('got', thingsToDo);
  setTimeout( () => {
    cb(null, thingsToDo);
  },100);
};

let promiserOfThings = (things, cb) => {
  return new Promise( (resolve,reject) => {
    resolve(cb(null,things))
  });
};

module.exports = {doerOfThings, promiserOfThings};