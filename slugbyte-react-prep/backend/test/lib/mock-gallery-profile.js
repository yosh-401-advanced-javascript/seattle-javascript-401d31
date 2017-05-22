'use strict';

const Profile = require('../../project/gallery/model/profile.js');
const mockGalleryProfile = module.exports = {};


mockGalleryProfile.create = function(){
  return new Profile({
    username: this.tempUser.username,
    photoURI: `example.com/${Math.random()}.jpg`,
  })
  .save()
  .then(profile => this.tempProfile = profile)
};

mockGalleryProfile.remove = () => Profile.removeAll()

