'use strict';

const mongoose = require('mongoose');
const httpError = require('http-errors');

const BudgetProfile = require('./profile.js');

const BudgetExpense = mongoose.Schema({
  price: {type: Number, min: 0, required: true},
  title: {type: String, minlength: 1, required: true},
  profile: {type: String, minlength: 1, required: true},
  category: {type: String, minlength: 1, required: true},
});

BudgetExpense.pre('save', (next) => {
  BudgetProfile.findOne({name: this.profile})
  .then(profile => {
    if(~profile.categorys.indexOf(this.category))
      throw httpError(404, 'profile category not found');
    next();
  })
  .catch(err => next(httpError(404, err.message)));
});

module.exports = mongoose.model('BudgetExpense', BudgetExpense);
