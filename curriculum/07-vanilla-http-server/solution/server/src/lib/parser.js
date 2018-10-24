'use strict';

const parseBody = require('./bodyParser.js');
const parseUrl = require('./urlParser.js');

module.exports = (req) => {

  return new Promise( (resolve,reject) => {

    if( !(req || req.url) ) { reject('Invalid Request Object. Cannot Parse'); }

    parseUrl(req);

    if(! req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }

    parseBody(req, resolve, reject);

  });

};
