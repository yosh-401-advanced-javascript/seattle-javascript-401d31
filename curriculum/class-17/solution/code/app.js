'use strict';

const fs = require('fs');
const util = require('util');
const net = require('net');

const socket = new net.Socket();

const options = {
  port: process.env.PORT || 3001,
  host: process.env.HOST || 'localhost',
};

socket.connect(options, () => {});

socket.on('close', function() {
  console.log('Connection closed');
});


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
  .then( () => socket.write(`save ${file}`) )
  // .then( () => socket.destroy() )
  .catch( error => socket.write( `error ${error}`) );



