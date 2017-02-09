'use strict';

describe('Gallery Item Component', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryItemCtrl.delete()', () => {
    it('should make a valid delete request', () => {
      let bindings = { gallery: mockGallery() };
      let url = `${__API_URL__}/api/gallery/${bindings.gallery._id}`;
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectDELETE(url, headers).respond(204);

      let galleryItemCtrl = this.$componentController('galleryItem', null, bindings);
      galleryItemCtrl.delete();

      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  }); //delete()
});

let num = 0;
function mockGallery() {
  let rand = Math.floor(Math.random()*10000);
  num++;
  return {
    _id: `${rand}-${num}`,
    name: `gallery ${rand}`,
    desc: `description for ${rand}`,
    pics: []
  };
}
