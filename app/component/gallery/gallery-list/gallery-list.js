'use strict';

require('./_gallery-list.scss');

module.exports = {
  template: require('./gallery-list.html'),
  controller: ['$log', '$rootScope', 'galleryService', GalleryListController],
  controllerAs: 'galleryListCtrl'
};

function GalleryListController($log, $rootScope, galleryService) {
  $log.debug('GalleryListController()');

  this.fetchGalleries = function() {
    $log.debug('galleryListCtrl.fetchGalleries');
    galleryService.fetchGalleries()
    .then( galleries => {
      this.galleries = galleries;
    });
  };

  this.fetchGalleries();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  });
}
