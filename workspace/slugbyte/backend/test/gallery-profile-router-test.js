'use strict'

const expect = require('expect');
const request = require('superagent');
const serverControl = require('./lib/server-control.js');
const mockUser = require('./lib/mock-user.js');
const mockGalleryProfile = require('./lib/mock-gallery-profile.js');

const API_URL = process.env.API_URL || 'http://localhost:3000'

describe('testing gallery profile', () => {
  before(serverControl.start);
  after(serverControl.stop);
  afterEach(mockUser.remove);
  afterEach(mockGalleryProfile.remove);

  describe('testing POST /gallery/profiles', function(){
    this.timeout(20000);
    before(mockUser.create.bind(this));

    it('should create a profile', () => {
      console.log('this.tempToken', this.tempToken);
      return request.post(`${API_URL}/gallery/profiles`)
      .set({ Authorization: `Bearer ${this.tempToken}`})
      .attach('photo', `${__dirname}/assets/tina.png`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.username).toEqual(this.tempUser.username);
        expect(res.body.photoURI).toExist();
      })
    });
  })
});


