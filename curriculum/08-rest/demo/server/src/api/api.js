'use strict';

const router = require('../lib/router.js');

// test with httpie:
// http http://localhost:8080/
router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write('Hello World');
  res.end();
});

// test with httpie:
// echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

module.exports = {};