'use strict';

const mongoose = require('mongoose');

// state 
// 0: backlog
// 1: ready
// 2: in progress
// 3: done

const KanbanCard = mongoose.Schema({
  title: {type: String, required: true, minlength: 1},
  state: {type: Number, min: 0, max: 3},
  comments: [{type: String, minlength: 1}],
});

module.exports = mongoose.model('KanbanCard', KanbanCard);
