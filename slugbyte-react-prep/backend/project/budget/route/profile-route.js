'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const httpError = require('http-errors');

const BudgetProfile = require('../model/profile.js');
const profileRouter = module.exports = new Router();

profileRouter.post('/profiles', jsonParser, (req, res, next) => {
  new BudgetProfile(req.body).save()
  .then(profile => res.json(profile))
  .catch(next);
});

// create or update
profileRouter.put('/profiles/:name', jsonParser, (req, res, next) => {
  BudgetProfile.findOneAndUpdate(
    {name: req.params.name},
    req.body,
    {new: true, runValidators: true})
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


