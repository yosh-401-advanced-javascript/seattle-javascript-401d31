'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const httpError = require('http-errors');

const ExpenseProfile = require('../model/expense.js');
const BudgetProfile = require('../model/profile.js');
const profileRouter = module.exports = new Router();

profileRouter.post('/profiles', jsonParser, (req, res, next) => {
  new BudgetProfile(req.body).save()
  .then(profile => res.json(profile))
  .catch(next);
});

// create or update
profileRouter.put('/profiles/:name', jsonParser, (req, res, next) => {
  BudgetProfile.findOne({name: req.params.name})
  .then(profile => {
    if(!profile) 
      throw httpError(404, 'profile not found')
    let categorySet = new Set(req.body.categorys);
    let diff = profile.categorys.filter(item => !categorySet.has(item))

    profile.categorys = req.body.categorys;
    return Promise.all([
      ExpenseProfile.remove({profile: profile.name, category: {$in: diff}}),
      profile.save(),
    ]);
  })
  .then(results => {
    console.log('deleted results', results[0].result);
    console.log('profile', results[1]);
    return results[1];
  })
  .then(profile => res.json(profile))
  .catch(next);
});

// fetch by name
profileRouter.get('/profiles/:name', (req, res, next) => {
  BudgetProfile.findOne({name: req.params.name})
  .then(profile => {
    if(!profile) throw httpError(404, 'profile not found');
    console.log('found', profile);
    res.json(profile)
  })
  .catch(next);
});

// delete by name
profileRouter.delete('/profiles/:name', (req, res, next) => {
  BudgetProfile.findOneAndRemove({name: req.params.name})
  .then(() => res.sendStatus(204))
  .catch(next);
});


