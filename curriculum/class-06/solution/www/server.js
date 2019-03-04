'use strict';

const superagent = require('superagent');
const express = require('express');
const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 8080;
const API = 'http://localhost:3000';

// Set the view engine for templating
app.set('view engine', 'ejs');

// Statics
app.use( express.static('./public') );

// Routes
app.get('/', homePage);
app.get('/list', listPage);
app.get('/category/:cat', categoryPage);

function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

function listPage(request, response) {
  superagent.get( `${API}/categories`)
    .then(data => {
      response.render('site', {page: './pages/categories', title:'Categories', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function categoryPage(request, response) {
  let category = request.params.cat;
  superagent.get( `${API}/products`)
    .query({category:category})
    .then(data => {
      response.render('site', {page: './pages/products', title:'Products', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
