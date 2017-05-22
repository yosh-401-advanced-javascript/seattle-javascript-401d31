'use strict'

const {Router} = require('express');
const httpErrors = require('http-errors');
const Profile = require('../model/profile.js');
const Comment = require('../model/comment.js');
const jsonParser = require('body-parser').json();
const bearerAuth = require('../../../lib/bearer-auth-middleware.js');

const commentRouter = module.exports = new Router()

commentRouter.post('/comments', bearerAuth, jsonParser, (req, res, next) => {
  if(!req.body.content)
    return next(httpErrors(400, 'bad request no content'));

  Profile.findOne({username: req.user.username})
  .then(profile => {
    if(!profile)
      throw httpErrors(404, 'profile not found');
    return new Comment({
      profile: profile._id,
      userID: req.user._id,
      photo: req.body.photoID,
      content: req.body.content,
    }).save()
  })
  .then(comment => comment.populate('profile').execPopulate())
  .then(comment => comment.populate('photo').execPopulate())

  .then(comment => res.json(comment))
  .catch(next);
});

commentRouter.get('/comments/:photoID', (req, res, next) => {
  Comment.find({photo: req.params.photoID})
  .populate('profile')
  .populate('photo')
  .then(photos => res.json(photos))
  .catch(next);
});

commentRouter.delete('/comments/:id', bearerAuth, (req, res, next) => {
  Comment.findOneAndRemove({username: req.user.username, _id: req.params.id})
  .then(comment => {
    if(!comment)
      throw httpErrors(404, 'comment not found');
    return Photo.findById(comment.photo)
  })
  .then(photo => {
    if(!photo)
      throw httpErrors(404, 'photo not found')
    photo.comments = photoSchema.comments.filter(item => item !== this._id.toString());
    return photo.save();
  })
  .then(() => res.sendStatus(204))
  .catch(next);
});
