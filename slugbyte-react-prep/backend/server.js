'use strict'

const fs = require('fs');

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

// create app
const app = module.exports = express();

// add global midleware
app.use(cors());
app.use(morgan('dev'));

// require routes
fs.readdir(`${__dirname}/project`, (err, dirs) => {
  dirs.forEach(dir => {
    app.use(`/${dir}`, require(`${__dirname}/project/${dir}`));
  });
});

// add static server ?
