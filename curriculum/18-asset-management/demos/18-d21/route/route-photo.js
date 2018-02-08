'use strict'

// Route Dependencies
const Photo = require('../model/photo')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')
const bearerAuth = require('../lib/bearer-auth-middleware')

// Photo Upload Dependencies & Setup
const multer = require('multer')
const tempDir = `${__dirname}/../temp`
const upload = multer({ dest: tempDir })

module.exports = function(router) {
  router.get('/photo/me', bearerAuth, (req, res) => {
    Photo.find({userId: req.user._id})
    .then(pics => pics.map(pic => pic._id))
    .then(ids => res.status(200).json(ids))
    .catch(err => errorHandler(err, res))
  })

  router.route('/photo/:_id?')
  .post(bearerAuth, bodyParser, upload.single('image'), (req, res) => {
    Photo.upload(req)
    .then(photoData => new Photo(photoData).save())
    .then(pic => res.status(201).json(pic))
    .catch(err => errorHandler(err, res))
  })
  .get(bearerAuth, (req, res) => {
    if(req.params._id) {
      return Photo.findById(req.params._id)
      .then(pic => res.status(200).json(pic))
      .catch(err => errorHandler(err, res))
    }

    Photo.find()
    .then(pics => pics.map(pic => pic._id))
    .then(ids => res.status(200).json(ids))
    .catch(err => errorHandler(err, res))
  })
  // .put(bearerAuth, bodyParser, upload.single('image'), (req, res) => {})
  .delete(bearerAuth, (req, res) => {
    Photo.findById(req.params._id)
    .then(pic => {
      return pic.userId.toString() === req.user._id.toString()
      ? pic.delete()
      : Promise.reject(new Error('Authorization failed. User does not own image.'))
    })
    .then(() => res.sendStatus(204))
    .catch(err => errorHandler(err, res))
  })
}