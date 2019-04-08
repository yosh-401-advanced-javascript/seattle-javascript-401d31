'use strict';

// 3rd Party Resources
const superagent = require('superagent');
const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());

// Should be in the ENV
let port = 3000;
const tokenServer = 'https://api.amazon.com/user/profile';

// Routes
app.get('/oauth', authorize);

function authorize (req,res) {

  let token = req.query.access_token;

  console.log('(1) TOKEN:', token);

  return superagent.get(tokenServer)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      let user = response.body;
      console.log({user});
      res.status(200).json(user);
    })
    .catch(error => { console.error('ack', error.message); res.status(500).send('Error'); });
}

app.listen( port, () => console.log(`Server up on ${port}`) );
