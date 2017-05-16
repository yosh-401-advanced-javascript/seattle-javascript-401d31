'use strict';

import axios from 'axios';

const budgetProfile = {};

let logResAndResolveData = (res) => {
  console.log('res', res);
  console.log('res.data', res.data);
  return res.data;
};

budgetProfile.create = (profile) => {
  return axios.post(`${__API_URL__}/budget/profiles`, profile)
  .then(logResAndResolveData);
};

budgetProfile.update = (profile) => {
  return axios.put(`${__API_URL__}/budget/profiles/${profile.name}`, profile)
  .then(logResAndResolveData);
};

budgetProfile.fetch = (profile) => {
  return axios.get(`${__API_URL__}/budget/profiles/${profile.name}`)
  .then(logResAndResolveData);
};

budgetProfile.delete = (profile) => {
  return axios.delete(`${__API_URL__}/budget/profiles/${profile.name}`)
  .then(logResAndResolveData);
};

export default budgetProfile;
