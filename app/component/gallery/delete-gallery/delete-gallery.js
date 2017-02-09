'use strict';

require('./_delete-gallery.scss');

module.exports = {
  template: require('./delete-gallery.html'),
  controller: ['$log', DeleteGalleryController],
  controllerAs: 'deleteGalleryCtrl',
  bindings: {
    onConfirm: '&',
    onCancel: '&'
  }
};

function DeleteGalleryController($log) {
  $log.debug('DeleteGalleryController()');

  $log.debug(this);
  // for(let prop in this) {
  //   $log.debug(prop, typeof prop);
  // }

  this.confirm = function() {
    $log.debug('confirm...');
    this.onConfirm();
  };

  this.cancel = function() {
    $log.debug('cancel...');
    this.onCancel();
  };
}
