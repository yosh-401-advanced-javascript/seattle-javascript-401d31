401 JS -- class 04 Event Emitters, Promises, and Bitmaps
===

## Event Emitter Resources
* [events api docs]

## Promise Resources
* Watch [async javascript with javascript]
* Watch [functional programming in javascript]
* Read [es6 promises]

## Bitmap Resources
* Read [bitmap file format]
* Read  [node buffer api docs]
* Watch [endian and little endian]

## Learning Objectives
<!-- unordered list of learning objectives --> 

## Overview
#### EventEmitter
* Much of the node APIs is built arount events
* All objects that emmit events in node are instances of the EventEmitter constructor
* EventEmitters are a great way to handle controling async events
* functions can be registered as listners for an event on instances of EventEmitters 
* instances of EventEmitters can emmit events and pass the listners data
* EventEmitters do not throw errors if events are emmited and have no listners to handle them
 * This can be a very powerful feature and is often used to implement "hooks" and "observables" in many librarys

``` javascript
'use strict';
// get access to EventEmitter constructor
const EventEmitter = require('events').EventEmitter;

let storage = {};

// create an instance of the EventEmitter
let storageEmitter = module.exports = new EventEmitter();

// define a listener called setData
storageEmitter.on('setData', function(key, value){
  // beforeWrite and afterWrite listners have not been defined
  // but they could be implemented by a consumer of this storage 
  // module if they need  that functionality for any reason this 
  // is a super powerful reason people use EventEmitters
  storageEmitter.emit('beforeWrite', key, value);
  storage[key] = value; 
  storageEmitter.emit('afterWrite', key, value);
});

storageEmitter.on('getData', function(key ,callback){
  callback(storage[key]);
});

storageEmitter.on('deleteData', function(key){
  storageEmitter.emit('beforeDelete', key, storage[key]);
  let backup = storage[key];
  delete storage[key];
  storageEmitter.emit('afterDelete', key, backup);
});
```
``` javascript
'use strict';

const storage = require('./storage.js');

// even though afterDelete wasnt implemented in the storage module
// we could implement it here to allow log the data being removed!
storage.on('beforeDelete', function(key){
  console.log('about to delete', key);
});

// even though afterDelete wasnt implemented in the storage module
// we could implement it here to allow us to delete all dependant data!
storage.on('afterDelete', function(key, value){
  // if the menu is delete then delete all of it items
  if(key === 'menu'){
    value.forEach( item => storage.emit('deleteData', item.name));
  }
});

let menu = [
  {
    name: 'blt',
    price: 8.45,
  },
  {
    name: 'pbj',
    price: 4.50,
  },
  {
    name: 'club',
    price: 9.00,
  },
  {
    name: 'veggy',
    price: 8.45,
  }
];

menu.forEach( item => storage.emit('setData', item.name, item));
storage.emit('setData', 'menu', menu);

storage.emit('getData', 'blt', function(data){
  console.log('blt', data);
})

storage.emit('deleteData', 'menu');

storage.emit('getData', 'blt', function(data){
  console.log('blt', data);
})
```
#### Promise

``` json
[
  "https://api.github.com/search/repositories?q=language:javascript",
  "https://api.github.com/search/repositories?q=language:python",
  "https://api.github.com/search/repositories?q=language:swift",
  "https://api.github.com/search/repositories?q=language:c"
]
```

``` javascript
'use strict';

const fs = require('fs');
const superagent = require('superagent');

// promises can be created using the new Promise() constructor
// which takes a callback that expects two callback functions resolve
// and reject.  
function readFileProm(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err); // reject is called anytime there is an error
      return resolve(data); // resolve is called when there is a success
    });
  });
}

function writeFileProm(path, data){
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) return reject(err); // reject is called anytime there is an error
      return resolve(); // resolve is called when there is a success
    });
  });
}
// read a json file
// turn a buffer into a string
// parse the string into an array
// turn each url in the array into a GET request
// make all the requests
// extact the body from each response
// write the responses to the file system
// log success

readFileProm(`${__dirname}/gh-search.json`) 
.then(data => data.toString())  
.then(json => JSON.parse(json)) 
.then(urlList => { 
  let requests = urlList.map(url => superagent.get(url)); 
  return Promise.all(requests); 
})
.then(responses => responses.map(res => res.body)) 
.then(data => writeFileProm(`${__dirname}/results.json`, JSON.stringify(data, null, 2))) 
.then(() => console.log('success')) 
.catch(console.error)
```
#### Binary 
* you've probably heard that all things in the computer are just a bunch of zeros and ones
 * its true :)
* since zeros and ones mean almost nothing to humans we have created rules to convert them in to meaningful infromation
* Integers, floating point numbers, characters are some of the basic things we can turn zeros and ones into
* the process for taking an integer, float, character, or ect. and turning them into zeros and one is called encoding
* the process for taking zeros and ones and turning them into an integer, float, character, or ect. is called decoding
* binary and hex work a lot like decimal 
 * decimal is also called base 10
 * binary is also called base 2 
 * hex is also called base 16
 * if you take each digit multipy it times its base to the power of its place, you get its value
```
HOW DECMAL WORKS...

places    43210
_______________
value     06974

6974 base 10 is the same as (6 * 10^3) + (9 * 10^2) + (7 * 10^1) + (8 * 10^0)
6974 base 10 is the same as (6 * 1000) + (9 * 100) + (7 * 10) + (8 * 1)
6974 base 10 is the same as (6000) + (900) + (70) + (8)
6974 base 10 is the same as 6974

----------------------------------------------------------------------

HOW BINARY WORKS

places    43210
_______________
value     01011

1010 base 2 is the same as (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0)
1010 base 2 is the same as (1 * 8) + (0 * 4) + (1 * 2) + (1 * 1)
1010 base 2 is the same as (8) + (0) + (2) + (1)
1010 base 2 is the same as 11

----------------------------------------------------------------------

Hex is the same ...
```
* below is decimal hex binary conversion chart
``` text
DEC |HEX |BIN
--------------
0   |0   |0000
1   |1   |0001   
2   |2   |0010   
3   |3   |0011   
4   |4   |0100   
5   |5   |0101   
6   |6   |0110   
7   |7   |0111   
8   |8   |1000   
9   |9   |1001   
10  |a   |1010   
11  |b   |1011   
12  |c   |1100   
13  |d   |1101   
14  |e   |1110   
15  |f   |1111   
```
* to convert to floating points is a little takes the binary to decmial idea a little further by useing it for scientific notation
* to convert to text there is an encoding called ascii which maps all characters to a coresponding number
 * run the command `man ascii` in your command line to see an ascii chart
* now days we have a character encoding called `utf8` that is an extension for ascii, that suports multipul languages

#### Buffers

<!--links -->
[events api docs]: https://nodejs.org/api/events.html
[async javascript with javascript]: https://www.youtube.com/watch?v=g90irqWEqd8
[functional programming in javascript]: https://www.youtube.com/watch?v=2d7s3spWAzo
[es6 promises]: https://medium.com/ecmascript-2015/es6-promises-9ca8d8b4aca6#.x683hhcy5
[bitmap file format]: https://en.wikipedia.org/wiki/BMP_file_format
[node buffer api docs]: https://nodejs.org/api/buffer.html
[endian and little endian]: https://www.youtube.com/watch?v=B50mNoVw21k
