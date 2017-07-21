'use strict';

const BudgetExpense = require('../../project/budget/model/expense.js');

const mockBudgetExpense = module.exports = {};

mockBudgetExpense.create = function(){
  return new BudgetExpense({
    profile: this.tempProfile.name,
    category: this.tempProfile.categorys[0], 
    title: 'example' + Math.random(),
    price: Math.floor(Math.random() * 20 + 10),
  })
  .save()
  .then(expense => this.tempExpense = expense);
};

mockBudgetExpense.remove = function(){
  return BudgetExpense.remove({});
};
