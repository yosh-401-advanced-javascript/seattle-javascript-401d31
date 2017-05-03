'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();

const KanbanCard = require('./model/kanban-card.js');

const kanbanCardRouter = module.exports = new Router();

kanbanCardRouter.post('/card', jsonParser, (req, res, next) => {
  new KanbanCard(req.body).save()
  .then(data => res.json(data))
  .catch(next);
});

kanbanCardRouter.get('/card', (req, res, next) => {
  KanbanCard.find({})
  .then(data => res.json(data))
  .catch(next);
});

kanbanCardRouter.put('/card/:id', jsonParser, (req, res, next) => {
  KanbanCard.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
  .then(data => res.json(data))
  .catch(next);
});

kanbanCardRouter.delete('/card/:id', (req, res, next) => {
  KanbanCard.findByIdAndRemove(req.params.id)
  .then(() => res.sendStatus(204))
  .catch(next);
});
