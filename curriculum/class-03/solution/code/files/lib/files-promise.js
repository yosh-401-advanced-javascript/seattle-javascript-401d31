'use strict';

const fs = require('fs');
const util = require('util');
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

module.exports = exports = {};

exports.read = (file) => read(file)
  .then( contents => contents.toString().trim() )
  .catch(err => err);

exports.write = (file, contents) => write(file, Buffer.from(contents) )
  .then( success => success )
  .catch(err => err);

