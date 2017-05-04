'use strict';

const KanbanCard = require('../../project/kanban/model/kanban-card.js');

const mockKanbanCard = module.exports = {};

mockKanbanCard.create = function(){
  return new KanbanCard({
    title: 'example ' + Math.random(),
    state: 0,
    comments: [],
  })
  .save()
  .then(data => {
    this.tempKanbanCard = data;
  });
};

mockKanbanCard.remove = function(){
  return KanbanCard.remove({});
};
