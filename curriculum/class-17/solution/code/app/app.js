'use strict';

let files = require('./lib/files.js');

let file = process.argv.slice(2).shift();

files.alterFile(file);

