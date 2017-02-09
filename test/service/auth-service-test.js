'use strict';

describe('Auth Service', function() {
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      });

      this.$rootScope.$apply();
    });
  }); //getToken

  describe('authService.signup()', () => {
    it('should send a user to be signed up', () => {
      let testUser = {
        username: 'testuser',
        email: 'testuser@test.com',
        password: 'testpass'
      };
      let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      this.$httpBackend.expectPOST(`${__API_URL__}/api/signup`, testUser, headers)
      .respond(200, 'test token');

      this.authService.signup(testUser)
      .then( token => {
        expect(token).toEqual('test token');
      });
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  }); //signup

  describe('authService.login()', () => {
    it('should log the user in and return a token', () => {
      let username = 'testuser';
      let password = 'testpass';
      let base64 = this.$window.btoa(`${username}:${password}`);
      let headers = {
        'Accept': 'application/json',
        'Authorization': `Basic ${base64}`
      };
      this.$httpBackend.expectGET(`${__API_URL__}/api/login`, headers)
      .respond(200, 'test token');

      this.authService.login({ username, password })
      .then( token => {
        expect(token).toEqual('test token');
      });
    });
  });
});
