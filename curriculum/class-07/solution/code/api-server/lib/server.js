'use strict';

const express = require('express');
require('../docs/config/swagger.js');

const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

const Categories = require('./models/categories.js');
const categoriesDatabase = new Categories();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Categories Routes
/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route GET /posts
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
app.get('/categories', getCategories);

/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route GET /posts
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
app.get('/categories/:id', getCategory);

/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route GET /posts/:id
 * @param {id} id.path.required
 * @returns {object} 200 {}
 * @returns {Error}  500 - Server error
 */
app.post('/categories', addCategory);

/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route PUT /posts/:id
 * @param {id} id.path.required
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
app.put('/categories/:id', replaceCategory);

/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route DELETE /posts/:id
 * @param {id} id.path.required
 * @returns {object} 200 {}
 * @returns {Error}  500 - Server error
 */
app.delete('/categories/:id', deleteCategory);

function getCategories(req,res,next) {
  let count = categoriesDatabase.count();
  let results = categoriesDatabase.get();
  res.json({count,results});
}

function getCategory(req,res,next) {
  let id = parseInt(req.params.id);
  let record = categoriesDatabase.get(id);
  res.json(record[0]);
}

function addCategory(req,res,next) {
  let {name} = req.body;
  let record = categoriesDatabase.post({name});
  res.json(record);
}

function replaceCategory(req,res,next) {
  let id = parseInt(req.params.id);
  let {name} = req.body;
  let record = {id,name};
  let updatedRecord = categoriesDatabase.put(id, record);
  res.json(updatedRecord);
}

function deleteCategory(req,res,next) {
  let id = parseInt(req.params.id);
  let result = categoriesDatabase.delete(id);
  res.json(result);
}

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

