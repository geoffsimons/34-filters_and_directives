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
      // bindings: {
      //   onConfirm: function() {
      //     $log.debug('modal got onConfirm');
      //   },
      //   onCancel: function() {
      //     $log.debug('modal got onCancel');
      //   }
      // }

      // template: deleteTemplate,
      // controller: ['$log', function($log) {
      //   $log.debug('deleteGalleryCtrl()');
      //
      //   this.confirm = function() {
      //     galleryService.deleteGallery(this.gallery);
      //     this.dialog.close('Yes clicked');
      //   };
      //
      //   this.cancel = function() {
      //     this.dialog.dismiss('No clicked');
      //   };
      // }],
      // controllerAs: 'deleteGalleryCtrl',
      // scope: this
    });

    this.dialog.result
    .then( () => {
      $log.debug('Delete confirmed');
    })
    .catch( () => {
      $log.debug('Delete cancelled');
    });
  };
}
