'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    onDelete: '&'
  }
};

function ThumbnailController($log) {
  $log.debug('ThumbnailController()');

  this.deletePic = function() {
    $log.debug('thumbnailCtrl.deletePic()');
    this.onDelete();
  };
}
