'use strict';

import axios from 'axios';

const cardRequests = {};
const API_URL = `${__API_URL__}/kanban/card`;

cardRequests.fetchAll = () => {
  return axios.get(API_URL)
  .then(res => res.data);
};

cardRequests.create = (card) => {
  return axios.post(API_URL, card)
  .then(res => res.data);
};

cardRequests.update = (card) => {
  return axios.put(`${API_URL}/${card._id}`, card)
  .then(res => res.data);
};

cardRequests.delete = (card) => {
  return axios.delete(`${API_URL}/${card._id}`)
};

export default cardRequests;
