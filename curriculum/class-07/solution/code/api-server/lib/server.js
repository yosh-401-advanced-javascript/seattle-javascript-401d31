'use strict';

const express = require('express');

const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const stamper = require('./middleware/stamper.js');

const categoryRoutes = require('./routes/categories.js');

let db = [];

const app = express();

app.use(express.json());

app.use(stamper);

app.use(categoryRoutes);

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

