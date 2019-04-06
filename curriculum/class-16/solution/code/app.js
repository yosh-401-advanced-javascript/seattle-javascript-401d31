'use strict';

const fs = require('fs');
const util = require('util');

// Our event pool/monitor
const events = require('./lib/events.js');

// Listen for things to happen and log them out
const logger = require('./lib/logger.js');

// -------------------------------------------------
// Read in a file, save it, throw up some events...
// -------------------------------------------------

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

let file = process.argv.slice(2).shift();

const loadFile = (file) => readFile(file);

const saveFile = (file,buffer) => writeFile(file,buffer);

const convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

loadFile(file)
  .then( contents => convertBuffer(contents) )
  .then( buffer => saveFile(file,buffer) )
  .then( () => events.emit('file-save', file) )
  .catch( error => events.emit('file-error', error) );

