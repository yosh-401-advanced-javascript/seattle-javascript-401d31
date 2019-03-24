'use strict';

const express = require('express');

const app = express();

// Middleware Functions

// Throw an error
const barf = (req,res,next) => next('throws an error');

// Not Found Middleware
const notFound = (req,res) => {
  res.status(404).send('Not Found!');
};

// Handle Errors
const errorHandler = (err,req,res,next) => {
  res.status(500).send(err);
};

// Actual Routes
app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/e', barf, (req,res) => {
  res.status(200).send('Route D');
});


app.use('*', notFound);
app.use(errorHandler);


// In order to run tests, we must export the express 'app' as part of an object
// Additionally, because we're now a module and not a standalone app, we export a start() method
// and let something else require and start us up
module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Listening on ${port}`)),
};
