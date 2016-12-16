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

// PROMISES === 'beautiful chaining'
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
