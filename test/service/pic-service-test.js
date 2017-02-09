'use strict';

describe('Pic Service', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, picService, $window, $httpBackend) => {
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.picService = picService;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
    });
    this.gallery = {
      _id: '1234',
      name: 'test gallery name', //TODO: Are name and desc needed?
      desc: 'test gallery desc'
    };
  });

  describe('picService.uploadGalleryPic()', () => {
    it('should add a pic to a gallery', () => {
      //TODO: pic should probably have a file field.
      //  Right now, the test passes without it, so
      //  there might need to be some kind of validation
      //  before we hit the server.
      let pic = {
        name: 'example pic name',
        desc: 'example pic desc'
      };

      //TODO: Our Content-Type should probably be form/multipart
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST(`${__API_URL__}/api/gallery/${this.gallery._id}/pic`, pic, headers)
      .respond(200, {
        _id: 'pic5555',
        name: pic.name,
        desc: pic.desc,
        imageURI: 'http://test.com/pic/xyz',
        objectKey: 'xyz'
      });

      this.picService.uploadGalleryPic(this.gallery, pic);
    });
  }); //upload

});
