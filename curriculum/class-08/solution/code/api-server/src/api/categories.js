'use strict';

const express = require('express');

const Categories = require('../models/categories/categories.js');
const categories = new Categories();

const router = express.Router();

// ROUTES
router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategory);

router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategory);
router.delete('/api/v1/categories/:id', deleteCategory);

// FUNCTIONS
function getCategories(request,response,next) {
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function getCategory(request,response,next) {
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function postCategory(request,response,next) {
  categories.create(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


function putCategory(request,response,next) {
  categories.update(request.params.id, request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function deleteCategory(request,response,next) {
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
