'use strict';

const mongoose = require('mongoose');

const commentScheama = mongoose.Schema({
  content: {type: String, minlength:1, required: true},
  userID: {type: String, required:true},
  photo: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'GalleryPhoto'
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'GalleryProfile'
  },
});

module.exports = mongoose.model('GalleryComment', commentScheama);
