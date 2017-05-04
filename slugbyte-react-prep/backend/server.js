'use strict';

const fs = require('fs');

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dev');

// create app
const app = module.exports = express();

// add global midleware
app.use(cors());
app.use(morgan('dev'));

fs.readdir(`${__dirname}/project`, (err, dirs) => {
  // require routes
  dirs.forEach(dir => {
    app.use(`/${dir}`, require(`${__dirname}/project/${dir}`));
  });

  // add static server 
  app.use(express.static(`${__dirname}/public`));
  app.get('*', (req, res) => res.redirect('/'));
  
  // add error middleware
  app.use(require('./lib/error-middleware.js'));
});


