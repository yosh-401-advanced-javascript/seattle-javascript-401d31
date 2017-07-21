'use strict';

const mongoose = require('mongoose');

const BudgetProfile = mongoose.Schema({
  name: {type: String, minlength: 1, required: true, unique: true},
  total: {type: Number, min: 0, required: true},
  categorys: [{type: String, minlength: 1}],
});

module.exports = mongoose.model('BudgetProflie', BudgetProfile);
