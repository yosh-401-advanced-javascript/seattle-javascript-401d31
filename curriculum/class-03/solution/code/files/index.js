'use strict';

const fsViaCallback = require('./lib/files-callback.js');
const fsViaPromise = require('./lib/files-promise.js');
const file = process.argv.slice(2)[0];

// fsViaCallback.read(file, (err,data) => {
//   if(err) { console.error(err); }
//   else {
//     let obj = JSON.parse(data);
//     obj.lastName = 'Callback';
//     let contents = JSON.stringify(obj,2);
//     fsViaCallback.write(contents, file, (err,data) => {
//       if ( err ) { console.error(err); }
//       else {
//         fsViaCallback.read(file, (err,data) => {
//           console.log( JSON.parse(data) );
//         });
//       }
//     });
//   }
// });

fsViaPromise.read(file)
  .then( json => {
    let obj = JSON.parse(json);
    obj.lastName = 'Promise';
    return obj;
  })
  .then( object => fsViaPromise.write( file, JSON.stringify(object) ) )
  .then( success => fsViaPromise.read(file) )
  .then( json => console.log( JSON.parse(json) ) )
  .catch(console.error);
