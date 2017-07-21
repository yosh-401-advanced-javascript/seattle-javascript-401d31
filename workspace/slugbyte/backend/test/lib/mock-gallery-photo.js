'use strict'

const Photo = require('../../project/gallery/model/photo.js');

const mockGalleryPhoto =  module.exports = {}

mockGalleryPhoto.create = function(done){
  new Photo({
    photoURI: `example-photos.aws.com/${Math.random()}.jpg`,
    description: 'example ' + Math.random(),
    userID: this.tempUser._id.toString(),
    profile: this.tempProfile._id.toString(),
  }).save()
  .then(photo => {
    this.tempPhoto = photo;
    done();
  })
  .catch(done)
};

mockGalleryPhoto.remove = () => Photo.removeAll();
