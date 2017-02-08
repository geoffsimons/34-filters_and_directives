'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controller: ['$log', 'galleryService', GalleryItemController],
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryItemController($log, galleryService) {
  $log.debug('GalleryItemController()');

  this.showEditor = false;

  this.delete = function() {
    $log.debug('galleryItemCtrl.delete()');
    galleryService.deleteGallery(this.gallery);
  };
}
