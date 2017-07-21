'use strict'

const expect = require('expect');
const superagent = require('superagent');
const serverControl = require('./lib/server-control.js');
const mockUser = require('./lib/mock-user.js');
const mockGalleryProfile = require('./lib/mock-gallery-profile.js');
const mockGalleryPhoto = require('./lib/mock-gallery-photo');
const mockGalleryComment = require('./lib/mock-gallery-comment.js');

const API_URL = `${process.env.API_URL}/gallery`;

describe('testing gallery comment router', function(){
  before(serverControl.start);
  after(serverControl.stop);
  afterEach(() => Promise.all([
    mockGalleryComment.remove(),
    mockGalleryPhoto.remove(),
    mockGalleryProfile.remove(),
    mockUser.remove(),
  ]));

  describe('testing POST /gallery/comments', function(done) {
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));

    it('should create a comment', () => {
      return superagent.post(`${API_URL}/comments`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .send({
        content: 'cool beans', 
        photoID: this.tempPhoto._id, 
      })
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.content).toEqual('cool beans');
        expect(res.body.photo.photoURI).toEqual(this.tempPhoto.photoURI);
        expect(res.body.profile.username).toEqual(this.tempProfile.username);
        expect(res.body.profile.photoURI).toEqual(this.tempProfile.photoURI);
      });
    });
  });

  describe('testing GET /gallery/comments/:photoID', function(done) {
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));
    before(mockGalleryComment.create.bind(this));
    before(mockGalleryComment.create.bind(this));
    before(mockGalleryComment.create.bind(this));

    it('should create a comment', () => {
      return superagent.get(`${API_URL}/comments/${this.tempPhoto._id}`)
      .then(res => {
        expect(res.status).toEqual(200);
        res.body.forEach(comment => {
          expect(comment.content.startsWith('example')).toEqual(true)
          expect(comment.photo._id).toEqual(this.tempPhoto._id)
          expect(comment.profile._id).toEqual(this.tempProfile._id)
        })
        expect(res.body.length).toEqual(3);
      });
    });
  });

  describe('testing DELETE /gallery/comments/:id', function(){
    before(mockUser.create.bind(this));
    before(mockGalleryProfile.create.bind(this));
    before(mockGalleryPhoto.create.bind(this));
    before(mockGalleryComment.create.bind(this));
    it('should create a comment', () => {
      return superagent.delete(`${API_URL}/comments/${this.tempComment._id}`)
      .set('Authorization', `Bearer ${this.tempToken}`)
      .then(res => {
        expect(res.status).toEqual(204);
      });
    });

  })
})
