'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const BudgetExpense = require('../model/expense.js');
const expenseRouter = module.exports = new Router();

expenseRouter.post('/expenses', jsonParser, (req, res, next) => {
  new BudgetExpense(req.body).save()
  .then(expense => res.json(expense))
  .catch(next);
});

expenseRouter.get('/expenses/:profileName', (req, res, next) => {
  BudgetExpense.find({profile: req.params.profileName})
  .then(expenses => res.json(expenses))
  .catch(next);
});

expenseRouter.put('/expenses/:id', jsonParser, (req, res, next) => {
  BudgetExpense.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true, runValidators: true})
  .then(expense => res.json(expense))
  .catch(next);
});

expenseRouter.delete('/expenses/:id', jsonParser, (req, res, next) => {
  BudgetExpense.findByIdAndRemove(req.params.id)
  .then(() => res.sendStatus(204))
  .catch(next);
});
