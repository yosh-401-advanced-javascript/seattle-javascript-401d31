'use strict'

const mongoose = require('mongoose')

const Gallery = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' }
}, { timestamps: true })

Gallery.pre('save', function (next) {
  // Show a logging example for mongoose middleware (students have already seen these in practical use as well)
  console.log(this)
  next()
})

module.exports = mongoose.model('gallery', Gallery)