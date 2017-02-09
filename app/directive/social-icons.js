'use strict';

require('./_social-icons.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    controllerAs: 'socialIconsCtrl',
    bindToController: true,
    scope: {
      title: '@'
    }
  };
};

function SocialIconsController($log) {
  $log.debug('SocialIconsController()');

  this.icons = ['fb', 'twitter', 'youtube'];
}
