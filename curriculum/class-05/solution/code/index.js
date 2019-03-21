'use strict';

const fs = require('fs');
const Bitmap = require('./lib/bitmap.js');

let [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transformWithCallback();
// transformWithPromises();

function transformWithCallback() {
  fs.readFile(file, (err, buffer) => {
    if (err) {
      throw err;
    }
    bitmap.parse(buffer);
    bitmap.transform(operation);
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });
  });
}

// With Promises
function transformWithPromises() {
  bitmap.load()
    .then( () => bitmap.transform(operation) )
    .then( () => bitmap.write() )
    .then( message => console.log(message) )
    .catch( console.err );
}
