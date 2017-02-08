'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controller: ['$log', 'picService', ThumbnailContainerController],
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<'
  }
};

function ThumbnailContainerController($log, picService) {
  $log.debug('ThumbnailContainerController()');

  this.deletePic = function(pic) {
    $log.debug('thumbnailContainerCtrl.deletePic()');

    picService.deleteGalleryPic(this.gallery, pic)
    .then( () => {
      $log.debug('return from service, pic deleted');
    });
  };
}
