'use strict';

const BudgetProfile = require('../../project/budget/model/profile.js');

const mockBudgetProfile = module.exports = {};

mockBudgetProfile.create = function(){
  return new BudgetProfile({
    name: 'example ' + Math.random(),
    total: Math.floor(Math.random() * 100 + 50),
    categorys: ['food', 'house'],
  })
  .save()
  .then(profile => this.tempProfile = profile);
};

mockBudgetProfile.remove = function(){
  return BudgetProfile.remove({});
};
