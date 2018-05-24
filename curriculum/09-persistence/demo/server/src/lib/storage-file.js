'use strict';

const fs = require('fs');

const storage = module.exports = {};

const dataDirectory = `${__dirname}/../../data`;

let readFilePromise = function(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, data){
      if (err)
        reject(err);
      else
        resolve(data);
    });
  });
};

storage.getAll = () => {
  return new Promise( (resolve,reject) => {
    fs.readdir(dataDirectory, (err,files) => {
      if(err) { reject(err); }
      let promises = [];
      while(files.length) {
        let file = files.shift();
        file = `${dataDirectory}/${file}`;
        promises.push( readFilePromise(file) );
      }
      Promise.all(promises)
        .then(contents => {
          let database = contents.reduce( (db,data) => {
            let obj = JSON.parse(data.toString());
            db[obj.id] = obj;
            return db;
          },{});
          resolve(database);
        })
        .catch(console.log);
    });
  });
};

storage.get = (id) => {
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err,data) => {
      if ( data ) {
        let obj = JSON.parse(data.toString());
        resolve(obj);
      }
      else { reject(`${id} not found`); }
    });
  });
};

storage.save = (data) => {
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/${data.id}.json`;
    let text = JSON.stringify(data);
    fs.writeFile( file, text, (err) => {
      if(err) { reject(err); }
      resolve(data);
    });
  });
};

