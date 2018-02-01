'use strict'

const mongoose = require('mongoose')

const Album = mongoose.Schema({
  name: {type: String, required: true},
  tracks: [{type: mongoose.Schema.Types.ObjectId}],
})

module.exports = mongoose.model('album', Album)