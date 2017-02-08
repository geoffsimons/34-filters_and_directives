'use strict';

require('./_edit-gallery.scss');

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
    onComplete: '&'
  }
};

function EditGalleryController($log, galleryService) {
  $log.debug('EditGalleryController()');

  this.update = function() {
    galleryService.updateGallery(this.gallery)
    .finally( () => {
      $log.debug('returned from gallery service');
      this.onComplete();
    });
  };
}
