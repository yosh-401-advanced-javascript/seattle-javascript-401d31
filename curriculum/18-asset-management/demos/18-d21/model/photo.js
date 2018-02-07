'use strict'

const fs = require('fs')
const del = require('del')
const path = require('path')
const Gallery = require('./gallery')
const mongoose = require('mongoose')
const tempDir = `${__dirname}/../temp`
const awsS3 = require('../lib/aws-s3')

const Photo = mongoose.Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'auth'},
  galleryId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'gallery'},
  imageURI: {type: String, required: true, unique: true},
  objectKey: {type: String, required: true, unique: true},
}, {timestamps: true})

Photo.statics.upload = function(req) {
  return new Promise((resolve, reject) => {
    if(!req.file) return reject(new Error('Multi-part Form Data Error. File not present in request.'))
    if(!req.file.path) return reject(new Error('Multi-part Form Data Error. File path not present in request.'))

    let params = {
      ACL: 'public-read',
      Bucket: process.env.AWS_BUCKET,
      Key: `${req.file.filename}${path.extname(req.file.originalname)}`,
      Body: fs.createReadStream(req.file.path),
    }

    return awsS3.uploadProm(params)
    .then(data => {
      del([`${tempDir}/*`])

      let photoData = {
        name: req.body.name,
        desc: req.body.desc,
        objectKey: data.Key,
        imageURI: data.Location,
        userId: req.user._id,
        galleryId: req.body.galleryId,
      }

      resolve(photoData)
    })
    .catch(reject)
  })
}


// Photo.methods.delete = function() {
//   return new Promise((resolve, reject) => {
//     let params = {
//       Bucket: process.env.AWS_BUCKET,
//       Key: this.objectKey,
//     }

//     return awsS3.deleteProm(params)
//     .then(this.remove)
//     .then(resolve)
//     .catch(reject)
//   })
// }


module.exports = mongoose.model('photo', Photo)