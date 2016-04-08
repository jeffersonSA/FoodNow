'use strict'
angular
.module('starterApp', ['ngMaterial','ngRoute'])

.controller('AppCtrl', function($scope) {
})


.config(function($routeProvider, $locationProvider,$mdIconProvider){
  $routeProvider
  // Route User //
  .when('/usuario',{
    templateUrl: '/app/src/users/view/userSearch.html',
    controller:'userController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/usuario/novo',{
    templateUrl: '/app/src/users/view/user.html',
    controller:'userController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })

    // Route Client //
  .when('/cliente',{
    templateUrl: '/app/src/client/view/clientSearch.html',
    controller:'clientController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/cliente/novo',{
    templateUrl: '/app/src/client/view/client.html',
    controller:'clientController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
})
