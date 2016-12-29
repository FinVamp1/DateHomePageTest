'use strict';

/**
 * @ngdoc overview
 * @name homeTestApp
 * @description
 * # homeTestApp
 *
 * Main module of the application.
 */
angular
  .module('homeTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
