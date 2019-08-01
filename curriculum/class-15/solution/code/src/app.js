'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Esoteric Resources
const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');
const apiRouter = require('./api/v1.js');
const authRouter = require('./auth/router.js');
const auth = require('./auth/middleware.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(authRouter);
app.use(apiRouter);

app.get('/', auth(), (req,res) => {
  res.send('hi');
});

app.get('/s', auth('create'), (req,res) => {
  res.send('hi');
});

app.get('/d', auth('delete'), (req,res) => {
  res.send('hi');
});

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
