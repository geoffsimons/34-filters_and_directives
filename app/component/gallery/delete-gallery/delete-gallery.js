'use strict';

require('./_delete-gallery.scss');

module.exports = {
  template: require('./delete-gallery.html'),
  controller: ['$log', DeleteGalleryController],
  controllerAs: 'deleteGalleryCtrl',
  bindings: {
    close: '&',
    dismiss: '&',
  }
};

function DeleteGalleryController($log) {
  $log.debug('DeleteGalleryController()');

  this.confirm = function() {
    $log.debug('confirm...');
    this.close();
  };

  this.cancel = function() {
    $log.debug('cancel...');
    this.dismiss();
  };
}
