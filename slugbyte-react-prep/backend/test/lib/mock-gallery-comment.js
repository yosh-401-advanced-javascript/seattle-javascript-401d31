'use strict'

const Comment = require('../../project/gallery/model/comment.js');

const mockGalleryComment = module.exports = {};

mockGalleryComment.create = function(done){
  Comment.create({
    userID: this.tempUser._id,
    profile: this.tempProfile._id, 
    photo: this.tempPhoto._id,
    content: 'example ' +  Math.random(),
  })
  .save()
  .then(comment  => {
    this.tempComment = comment;
    done()
  })
  .catch(done)
}

mockGalleryComment.remove  = () => Comment.remove({})
