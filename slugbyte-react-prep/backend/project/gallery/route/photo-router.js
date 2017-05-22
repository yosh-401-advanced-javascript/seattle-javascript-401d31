'use strict'

const AWS = require('aws-sdk');
const {Router} = require('express');
const httpErrors = require('http-errors');
const s3Upload = require('../../../lib/s3-upload-middleware.js');
const bearerAuth = require('../../../lib/bearer-auth-middleware.js');
const Profile = require('../model/profile.js');
const Photo = require('../model/photo.js');
const Comment = require('../model/comment.js');
const photoRouter = module.exports = new Router();

const s3 = new AWS.S3();

photoRouter.post('/photos', bearerAuth, s3Upload('photo'), (req, res, next) => {
  if(!req.body.description)
    return next(httpErrors(400, 'photo requires description'));

  Profile.findOne({username: req.user.username})
  .then(profile => {
    if(!profile)
      throw httpErrors(404, 'profile not found')
    return new Photo({
      photoURI: req.s3Data.Location,
      userID: req.user._id.toString(),
      profile: profile._id.toString(),
      description: req.body.description,
    })
    .save()
  })
  .then(photo => photo.populate('profile').execPopulate())
  .then(photo => res.json(photo))
  .catch(next); 
});

photoRouter.get('/photos', bearerAuth, (req, res, next) => {
  Photo.find({userID: req.user._id})
  .populate('profile')
  .then(photos => res.json(photos))
  .catch(next);
});

photoRouter.get('/photos/:username', (req, res, next) => {
  Profile.findOne({username: req.params.username})
  .then(profile => {
    if(!profile)
      throw httpErrors(404, 'profile not found');

    return Photo.find({profile: profile._id}).populate('profile')
  })
  .then(photos => res.json(photos))
  .catch(next);
});

photoRouter.delete('/photos/:id', bearerAuth, (req, res, next) => {
  Photo.findOneAndRemove({userID: req.user._id, _id: req.params.id})
  .then(photo => {
    if(!photo) 
      throw httpErrors(404, 'photo not found');
    return photo;
  })
  .then((photo) => Comment.remove({username: req.user.username, photo: photo._id}))
  .then(() => res.sendStatus(204))
  .catch(next)
});
