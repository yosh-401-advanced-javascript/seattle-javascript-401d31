'use strict';

const fs = require('fs');

class CodeGenerator {
  
  constructor(code) {
    this.code = code;
    this.buffer = Buffer.from('');
  }
  
  addCharacter(char) {
    let newBuffer = Buffer.from(char);
    this.buffer = Buffer.concat([this.buffer, newBuffer]);
  }
  
  generate() { 
    this.code.split('').forEach(char => { this.addCharacter(char); })
  }
  
}

/*
 Student Solutions
 Created a buffer of the total length, filling with gibberish, and then going 
 node by node and put in the right thing based on char code
 
 Created a buffer, but filled with with the string (not iterating)
 
 Push onto an array (split the string), then forEach the string and made a 
 new array of 1 character buffers, and then fs.write was a join of that.
 
*/


let rawCode = "'use strict'; let arr = [1,2,3]; for( let num of arr ) { console.log(num); }";

let code = new CodeGenerator(rawCode);
code.generate();

fs.writeFile('./loop.js', code.buffer, (err,data) => {
  if( err ) { throw err; }
  console.log('Created loop.js');
});
