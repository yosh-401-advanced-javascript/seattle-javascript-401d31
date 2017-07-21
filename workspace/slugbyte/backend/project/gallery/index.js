'use strict';

let galleryRouter = module.exports = new require('express').Router()

galleryRouter.use(require('./route/photo-router.js'));
galleryRouter.use(require('./route/profile-router.js'));
galleryRouter.use(require('./route/comment-router.js'));
