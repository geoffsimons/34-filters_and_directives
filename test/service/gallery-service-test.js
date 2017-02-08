'use strict';

describe('Gallery Service', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryService.createGallery()', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'Gallery name',
        desc: 'Gallery desc'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST(`${__API_URL__}/api/gallery`, galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'testuser',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData)
      .then( gallery => {
        this.gallery = gallery;
      });
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.updateGallery()', () => {
    it('should update a gallery', () => {
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
      let update = {
        _id: this.gallery._id,
        name: 'new name'
      };

      this.$httpBackend.expectPUT(`${__API_URL__}/api/gallery/${this.gallery._id}`, update, headers)
      .respond(202, {
        _id: this.gallery._id,
        name: 'new name',
        desc: this.gallery.desc,
        pics: this.gallery.pics
      });

      this.galleryService.updateGallery(update);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let gallery = { _id: 'testId' };
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json'
      };

      this.$httpBackend.expectDELETE(`${__API_URL__}/api/gallery/testId`, headers)
      .respond(204);

      this.galleryService.deleteGallery(gallery);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
