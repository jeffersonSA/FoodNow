'use strict'
angular
.module('starterApp', ['ngMaterial','ngResource','ngRoute'])

.controller('AppCtrl', function($scope,serviceServer) {
  //  serviceServer.isLoading(false);

})


.config(function($routeProvider, $locationProvider,$mdIconProvider){
  $routeProvider
  // Route User //
  .when('/usuario',{
    templateUrl: '/app/src/users/view/userSearch.html',
    controller:'userSearchController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })

  .when('/usuario/add',
  {
    templateUrl: '/app/src/users/view/user.html',
    controller: 'userController'
  })
  
  .when('/usuario/add/:id',
  {
    templateUrl: '/app/src/users/view/user.html',
    controller: 'userController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  
  // .when('/usuario/novo',{
  //   templateUrl: '/app/src/users/view/user.html',
  //   controller:'userController',
  //   resolve:{
  //     delay: function($q, $timeout) {
  //       var delay = $q.defer();
  //       $timeout(delay.resolve, 1000);
  //       return delay.promise;
  //     }
  //   }
  // })

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

  // Route Depliveryman //
  .when('/entregador',{
    templateUrl: '/app/src/deliveryman/view/deliverymanSearch.html',
    controller:'deliverymanController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/entregador/novo',{
    templateUrl: '/app/src/deliveryman/view/deliveryman.html',
    controller:'deliverymanController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })

  // Route Order //
  .when('/clienttest',{
    templateUrl: '/app/src/client/view/ClientTest.html',
    controller:'clientController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })

  // Route Order //
  .when('/pedido',{
    templateUrl: '/app/src/order/view/orderSearch.html',
    controller:'orderController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })

  //Route New Order
  .when('/pedido/novo',{
    templateUrl: '/app/src/order/view/order.html',
    controller:'orderController',
    resolve:{
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })

})
