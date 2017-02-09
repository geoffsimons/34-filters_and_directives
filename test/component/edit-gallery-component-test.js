'use strict';

describe('Edit Gallery Component', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
    });
    this.$bindings = function() {
      let bindings = {
        gallery: mockGallery(),
        onComplete: function() {
          console.log('onComplete called when spyOn().and.callThrough()');
        }
      };
      return bindings;
    };
  });

  it('should contain proper component bindings', () => {
    let bindings = this.$bindings();
    spyOn(bindings, 'onComplete');
    let editGalleryCtrl = this.$componentController('editGallery', null, bindings);

    expect(editGalleryCtrl.gallery.name).toEqual(bindings.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(bindings.gallery.desc);
    expect(typeof editGalleryCtrl.onComplete).toEqual('function');
    expect(bindings.onComplete).toHaveBeenCalledTimes(0);
    this.$rootScope.$apply();
  });

  describe('editGalleryCtrl.updateGallery()', () => {
    it('should make a valid put request and call onComplete', () => {
      let bindings = this.$bindings();
      spyOn(bindings, 'onComplete'); //.and.callThrough();

      let url = `${__API_URL__}/api/gallery/${bindings.gallery._id}`;

      //TODO: Make headers factory.
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPUT(url, {
        _id: bindings.gallery._id,
        name: 'updated name',
        desc: 'updated desc',
        pics: []
      }, headers).respond(200);

      let editGalleryCtrl = this.$componentController('editGallery', null, bindings);
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.desc = 'updated desc';
      editGalleryCtrl.update();

      this.$httpBackend.flush();
      this.$rootScope.$apply();

      expect(bindings.onComplete).toHaveBeenCalled();
    });
  });
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
