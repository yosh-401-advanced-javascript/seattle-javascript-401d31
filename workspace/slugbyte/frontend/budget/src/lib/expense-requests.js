'use strict'

import axios from 'axios';

let expenseRequests = {}

let logResAndResolveData = (res) => {
  console.log('res', res);
  console.log('data', res.data);
  return res.data;
};

expenseRequests.create = (expense) => {
  return axios.post(`${__API_URL__}/budget/expenses`, expense)
  .then(logResAndResolveData);
};

expenseRequests.fetchAll = (profile) => {
  console.log('profile name', profile.name);
  return axios.get(`${__API_URL__}/budget/expenses/${profile.name}`)
  .then(logResAndResolveData);
};

expenseRequests.update = (expense) => {
  return axios.put(`${__API_URL__}/budget/expenses/${expense._id}`)
  .then(logResAndResolveData);
};

expenseRequests.delete = (expense) => {
  return axios.delete(`${__API_URL__}/budget/expenses/${expense._id}`)
  .then(logResAndResolveData);
};

export default expenseRequests;
