'use strict'

const expect = require('expect');
const superagent = require('superagent');
const mockUser = require('./lib/mock-user.js');
const serverControl = require('./lib/server-control.js');
const mockGalleryPhoto = require('./lib/mock-gallery-photo.js');
const mockGalleryProfile = require('./lib/mock-gallery-profile.js');

console.log('process.env.API_URL', process.env.API_URL);
const API_URL = `${process.env.API_URL}/gallery` 

describe('testing gallery photo router', function(){
  before(serverControl.start)
  after(serverControl.stop);
  afterEach(() => Promise.all([
      mockUser.remove(),
      mockGalleryProfile.remove(),
      mockGalleryPhoto.remove(),
    ])
  );

  describe('testing POST /gallery/photos', function(){
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));

    it('should create a photo', () => {
      return superagent.post(`${API_URL}/photos`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .field('description', 'cool beans')
      .attach('photo', `${__dirname}/assets/tina.png`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.description).toEqual('cool beans')
        expect(res.body.profile.username).toEqual(this.tempUser.username)
        expect(res.body.profile._id).toEqual(this.tempProfile._id)
      })
      
    })
  });

  describe('testing GET /gallery/photos', function(){
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));

    it('should return the users photos', () => {
      return superagent.get(`${API_URL}/photos`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.length).toEqual(2);
        res.body.forEach(photo => {
          expect(photo.description.startsWith('example')).toEqual(true);
          expect(photo.photoURI.endsWith('.jpg')).toEqual(true)
          expect(photo.userID).toEqual(this.tempUser._id)
          expect(photo.profile.username).toEqual(this.tempUser.username)
          expect(photo.profile.photoURI.endsWith('.jpg')).toEqual(true)
        })
      })
    })
  })

  describe('testing GET /gallery/photos/:username', function(){
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));

    it('should return the users photos', () => {
      return superagent.get(`${API_URL}/photos/${this.tempUser.username}`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.length).toEqual(2);
        res.body.forEach(photo => {
          expect(photo.description.startsWith('example')).toEqual(true);
          expect(photo.photoURI.endsWith('.jpg')).toEqual(true)
          expect(photo.userID).toEqual(this.tempUser._id)
          expect(photo.profile.username).toEqual(this.tempUser.username)
          expect(photo.profile.photoURI.endsWith('.jpg')).toEqual(true)
        })
      })
    })
  })

  describe('testing DELETE /gallery/photos/:id', function(){
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));

    it('should return the users photos', () => {
      return superagent.delete(`${API_URL}/photos/${this.tempPhoto._id}`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .then(res => {
        expect(res.status).toEqual(204)
      })
    })
  })

})
