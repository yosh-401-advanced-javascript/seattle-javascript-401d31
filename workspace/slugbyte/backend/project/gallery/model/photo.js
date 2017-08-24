'use strict';

const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const httpErrors = require('http-errors');

const s3 = new AWS.S3();

const photoSchema = mongoose.Schema({
  photoURI: {type: String, minlength: 1, required: true},
  description: {type: String, minlength: 1, required: true},
  userID: {type: String, required: true},
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'GalleryProfile'
  },
});

photoSchema.pre('remove', function(next){
    //console.log('removeing photo', this);
    let objectKey = this.photoURI.split('/').pop()
    if(!objectKey)
      return next();

    return s3.deleteObject({
      Key: objectKey, 
      Bucket: process.env.AWS_BUCKET,
    }).promise()
    .then(() => next())
    .catch(next);
})

const Photo = module.exports = mongoose.model('GalleryPhoto', photoSchema);

// calling Photo.remove({}) will not trigger the pre remove hook
// so you have to call remove on each doc
Photo.removeAll = (query={}) => Photo.find(query)
  .then(gallerys => Promise.all(gallerys.map(item => item.remove())))

