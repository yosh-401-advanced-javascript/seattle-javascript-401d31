'use strict'

const Gallery = require('../model/gallery')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')
const bearerAuth = require('../lib/bearer-auth-middleware')

module.exports = function (router) {
  router.route('/gallery/:_id?')
  .post(bearerAuth, bodyParser, (req, res) => {
    req.body.userId = req.user._id

    new Gallery(req.body).save()
    .then(gallery => res.status(201).json(gallery))
    .catch(err => errorHandler(err, res))
  })
  .get(bearerAuth, (req, res) => {
    if(req.params._id) {
      return Gallery.findById(req.params._id)
      .then(gallery => res.status(200).json(gallery))
      .catch(err => errorHandler(err, res))
    }

    Gallery.find()
    .then(galleries => res.status(200).json(galleries.map(gal => gal._id)))
    .catch(err => errorHandler(err, res))
  })
  .put(bearerAuth, bodyParser, (req, res) => {
    Gallery.findById(req.params._id)
    .then(gallery => {
      if(gallery.userId.toString() === req.user._id.toString()) {
        gallery.name = req.body.name || gallery.name
        gallery.desc = req.body.desc || gallery.desc
        return gallery.save()
      }
      errorHandler(new Error('Authorization failed. User does not own gallery.'), res)
    })
    .then(() => res.sendStatus(204))
    .catch(err => errorHandler(err, res))
  })
  .delete(bearerAuth, (req, res) => {
    return Gallery.findById(req.params._id)
      .then(gallery =>
        gallery.userId.toString() === req.user._id.toString()
        ? gallery.remove()
        : errorHandler(new Error('Authorization failed. User does not own gallery.'), res)
      )
      .then(() => res.sendStatus(204))
      .catch(err => errorHandler(err, res))
  })
}