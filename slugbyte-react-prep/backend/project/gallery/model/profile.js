'use strict';

const AWS = require('aws-sdk');
const mongoose = require('mongoose');

const s3 = new AWS.S3();

const profileSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  photoURI: {type: String, required: true},
});

profileSchema.pre('remove', function(next){
    //console.log('removing profile', this)
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

const Profile = module.exports = mongoose.model('GalleryProfile', profileSchema);

// calling Profile.remove({}) will not trigger the pre remove hook
// soo you have to remove each doc individualy 
Profile.removeAll = () => Profile.find({})
  .then(gallerys => Promise.all(gallerys.map(item => item.remove())))


