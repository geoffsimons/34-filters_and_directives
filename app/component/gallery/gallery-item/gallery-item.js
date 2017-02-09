'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controller: ['$log', '$uibModal', 'galleryService', GalleryItemController],
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryItemController($log, $uibModal, galleryService) {
  $log.debug('GalleryItemController()');

  this.showEditor = false;

  this.delete = function() {
    $log.debug('galleryItemCtrl.delete()');

    this.dialog = $uibModal.open({
      component: 'deleteGallery',
      size: 'sm' //Doesn't do anything!?!
    });

    this.dialog.result
    .then( () => {
      $log.debug('Delete confirmed');
      galleryService.deleteGallery(this.gallery);
    })
    .catch( () => {
      $log.debug('Delete cancelled');
    });
  };
}
