'use strict'

import axios from 'axios';

let budgetExpense = {}

let logResAndResolveData = (res) => {
  console.log('res', res);
  console.log('data', res.data);
  return res.data;
};

budgetExpense.create = (expense) => {
  return axios.post(`${__API_URL__}/budget/expenses`, expense)
  .then(logResAndResolveData);
};

budgetExpense.fetchAll = (profile) => {
  console.log('profile name', profile.name);
  return axios.get(`${__API_URL__}/budget/expenses/${profile.name}`)
  .then(logResAndResolveData);
};

budgetExpense.update = (expense) => {
  return axios.put(`${__API_URL__}/budget/expenses/${expense._id}`)
  .then(logResAndResolveData);
};

budgetExpense.delete = (expense) => {
  return axios.delete(`${__API_URL__}/budget/expenses/${expense._id}`)
  .then(logResAndResolveData);
};

export default budgetExpense;
