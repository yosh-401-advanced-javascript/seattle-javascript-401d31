'use strict';

const fs = require('fs');
const util = require('util');
const Q = require('@nmq/q/client');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);

file.saveFile = (file,buffer) => writeFile(file,buffer);

file.convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = incomingFile =>
  file.loadFile(incomingFile)
    .then( contents => file.convertBuffer(contents) )
    .then( buffer => file.saveFile(incomingFile,buffer) )
    .then( () => Q.publish('files','save', `Saved ${incomingFile}`) )
    .then( () => true )
    .catch( error => {
      Q.publish('files', 'error', error);
    });

