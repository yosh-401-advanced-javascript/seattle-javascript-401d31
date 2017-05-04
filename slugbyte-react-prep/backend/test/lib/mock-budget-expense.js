'use strict';

const BudgetExpense = require('../../project/budget/model/expense.js');

const mockBudgetExpense = module.exports = {};

mockBudgetExpense.create = function(){
  return new BudgetExpense({
    profile: this.tempProfile,
    category: 'food', 
    title: 'example' + Math.random(),
    price: Math.floor(Math.random() * 20),
  })
  .save()
  .then(expense => this.tempExpense = expense);
};

mockBudgetExpense.remove = function(){
  return BudgetExpense.remove({});
};
