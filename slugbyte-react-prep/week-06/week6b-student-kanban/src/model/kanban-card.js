'use strict';

import axios from 'axios';

const kanbanCard = {};
const API_URL = `${__API_URL__}/kanban/card`;

kanbanCard.fetchAll = () => {
  return axios.get(API_URL)
  .then(res => res.data);
};

kanbanCard.create = (card) => {
  return axios.post(API_URL, card)
  .then(res => res.data);
};

kanbanCard.update = (card) => {
  return axios.put(`${API_URL}/${card._id}`, card)
  .then(res => res.data);
};

kanbanCard.delete = (card) => {
  return axios.delete(`${API_URL}/${card._id}`)
};

export default kanbanCard;
