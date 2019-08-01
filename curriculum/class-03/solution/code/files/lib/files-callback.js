'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.read = (file,cb) => {
  fs.readFile(file, (err,data) => {
    if(err) { cb(err); }
    else { cb(null, data.toString().trim()); }
  });
};

exports.write = (file, contents, cb) => {
  let buffer = Buffer.from(contents);
  fs.writeFile( buffer, file, cb );
};
