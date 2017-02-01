'use strict';

describe('Gallery Service', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject((authService, galleryService, $httpBackend) => {
      this.authService = authService;
      authService.setToken('1234');

      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryService.createGallery', () => {
    it('should return a gallery', () => {
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer 1234'
      };

      this.$httpBackend.expectPOST('http://localhost:8000/api/gallery', galleryData, headers)
      .respond(200, { _id: '5678', username: 'testuser', name: galleryData.name, desc: galleryData.desc, pics: [] });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
    });
  });

  describe('galleryService.deleteGallery(galleryID)', () => {
    it('should delete a gallery', () => {
      let galleryID = '12345';
      let headers = {
        Authorization: 'Bearer 1234',
        Accept: 'application/json, text/plain, */*'
      };

      this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/12345', headers).respond(204);

      this.galleryService.deleteGallery(galleryID);

      this.$httpBackend.flush();
    });

    it('should respond with a 404', () => {
      let headers = {
        Authorization: 'Bearer 1234',
        Accept: 'application/json, text/plain, */*'
      };

      this.$httpBackend.whenDELETE('http://localhost:8000/api/gallery/:galleryID', headers).respond( function(method, url, data, headers, params) {
        if (params.galleryID !== '1234') {
          return [404, 'NotFoundError'];
        };

        return [204]
      });

      this.galleryService.deleteGallery('12345')
      .catch( err => {
        console.error('gallery delete not successful');
        expect(err.status).toBe(404);
      });

      this.$httpBackend.flush();
    });
  });
});
