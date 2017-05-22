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
  .then(user => {
    if(!user)
      throw httpErrors(404, 'profile not found');
    return new Comment({
      content: req.body.content,
      user: req.user._id,
      photo: req.user.photdId,
    }).save()
  })
  .comment(comment => comment.populate('user'))
  .then(comment => req.json(comment))
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
