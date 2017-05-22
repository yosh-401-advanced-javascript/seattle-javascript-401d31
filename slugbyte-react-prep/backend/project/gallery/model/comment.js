'use strict';

const mongoose = require('mongoose');
const httpErrors = require('http-errors');

const commentScheama = mongoose.Schema({
  content: {type: String, minlength:1, required: true},
  photo: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'GalleryPhoto'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'GalleryProfile'
  },
});

module.exports = mongoose.model('GalleryComment', commentScheama);
