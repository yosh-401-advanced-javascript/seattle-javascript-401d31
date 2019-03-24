'use strict';

const express = require('express');
const swaggerUI = require('swagger-ui-express');

const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

const Categories = require('./models/categories.js');
const categoriesDatabase = new Categories();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

// Swagger Docs
const swaggerDocs = require(`../docs/config/swagger.json`);
app.use('/docs/api', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Categories Routes
app.get('/categories', getCategories);
app.get('/categories/:id', getCategory);
app.post('/categories', addCategory);
app.put('/categories/:id', replaceCategory);
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
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

