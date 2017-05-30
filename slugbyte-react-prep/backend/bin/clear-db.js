'use strict';

const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/dev', () => {
  console.log('clearing database')
  const models = [
    require('../project/auth/model/user.js'),
    require('../project/budget/model/profile.js'),
    require('../project/budget/model/expense.js'),
    require('../project/gallery/model/profile.js'),
    require('../project/gallery/model/photo.js'),
    require('../project/gallery/model/comment.js'),
    require('../project/kanban/model/kanban-card.js'),
  ];

  Promise.all(models.map(model => model.remove({})))
  .then(() => console.log('success'))
  .catch(console.error)
  .then(() => process.exit())
})
