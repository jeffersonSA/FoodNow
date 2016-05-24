'use strict'
angular
.module('starterApp')
.controller('orderController', function($scope, $route, $routeParams, $location) {

  var imagePath = '';
  $scope.orders =
  [
    {
      face : imagePath,
      name: "Jefferson Araujo",
      phone: "(12) 98188-9809",
      address:"RUA X, 2, Vila Adyana - São José dos Campos - SP",
      deliveryman:"Jefferson Araujo",
      order:"Pedido: 001"
    },
    {
      face : imagePath,
      name: "Fabiana Assunção",
      phone: "(12) 98188-9809",
      address:"RUA FDS, 2, Vila Adyana - São José dos Campos - SP",
      deliveryman:"Claudio Rodrigues",
      order:"002"
    }
  ];

  $scope.deliveryman =
  [
    {
      id:0,
      deliveryman:""
    },
    {
      id:1,
      deliveryman:"Jefferson Araujo"
    },
    {
      id:2,
      deliveryman:"Claudio Rodrigues"
    }
  ];

  $scope.sandwichs =
  [
    {
      face : imagePath,
      name: "X-Burguer",
      phone: "R$ 4,00",
    },
    {
      face : imagePath,
      name: "X-Salada",
      phone: "R$ 5,00",
    },
  ];

})
