'use strict';

import axios from 'axios';

const profileRequests = {};

let logResAndResolveData = (res) => {
  console.log('res', res);
  console.log('res.data', res.data);
  return res.data;
};

profileRequests.create = (profile) => {
  return axios.post(`${__API_URL__}/budget/profiles`, profile)
  .then(logResAndResolveData);
};

profileRequests.update = (profile) => {
  return axios.put(`${__API_URL__}/budget/profiles/${profile.name}`, profile)
  .then(logResAndResolveData);
};

profileRequests.fetch = (profile) => {
  return axios.get(`${__API_URL__}/budget/profiles/${profile.name}`)
  .then(logResAndResolveData);
};

profileRequests.delete = (profile) => {
  return axios.delete(`${__API_URL__}/budget/profiles/${profile.name}`)
  .then(logResAndResolveData);
};

export default profileRequests;
