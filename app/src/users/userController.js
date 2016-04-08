'use strict'
angular
.module('starterApp')
.controller('userController', function($scope, $route, $routeParams, $location) {
  var imagePath = 'img/list/60.jpeg';
  $scope.todos =
  [
    {
      face : imagePath,
      name: "Jefferson S. Araujo",
      email: "jefferson.silvaaraujo@hotmail.com",
      user:"jaraujo",
    },
    {
      face : imagePath,
      name: "Fabiana Arassunção Araujo",
      email: "fabianaa.assuncao@hotmail.com",
      user:"faraujo",
    }
  ];
})
