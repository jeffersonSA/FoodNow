'use strict'
angular
.module('starterApp')
.controller('deliverymanController', function($scope, $route, $routeParams, $location) {

  var imagePath = '';
  $scope.deliveryman =
  [
    {
      face : imagePath,
      name: "Jefferson Araujo",
      phone: "(12) 98188-9809"
    },
    {
      face : imagePath,
      name: "Claudio Rodrigues",
      phone: "(12) 98188-9809"
    }
  ];

})
