'use strict';

const router = require('../lib/router.js');
const Notes = require('../models/notes.js');

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/api/v1/notes', (req,res) => {
  let model = new Notes();
  if ( req.url.query.id ) {
    model.findOne(req.url.query.id)
      .then( data => sendJSON(res,data) )
      .catch(console.error);
  }
  else {
    model.fetchAll()
      .then( data => sendJSON(res,data) )
      .catch(console.error);
  }
});

router.delete('/api/v1/notes', (req,res) => {
  let model = new Notes();
  if ( req.url.query.id ) {
    model.deleteOne(req.url.query.id)
      .then( success => {
        let data = {id:req.url.query.id,deleted:success};
        sendJSON(res,data);
      })
      .catch(console.error);
  }
});

router.post('/api/v1/notes', (req,res) => {

  let record = new Notes(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(console.error);

});

module.exports = {};
