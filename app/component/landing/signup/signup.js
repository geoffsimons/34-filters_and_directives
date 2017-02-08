'use strict';

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignupController],
  controllerAs: 'signupCtrl'
};

function SignupController($log, $location, authService) {
  $log.debug('SignupController()');

  authService.getToken()
  .then( () => {
    $location.url('/home');
  });

  this.user = {};

  this.signup = function() {
    $log.debug('signupCtrl.signup()',this.user);

    authService.signup(this.user)
    .then( () => {
      $location.url('/home');
    });
  };
}
