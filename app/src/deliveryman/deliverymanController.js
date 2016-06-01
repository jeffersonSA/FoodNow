'use strict'
angular
.module('starterApp')
.controller('deliverymanController',  function ($scope, $route, $routeParams,$mdDialog, $location, $http, serviceServer) {
 var url = 'http://localhost:50073/api/Deliveryman';
  var imagePath = 'img/list/60.jpeg';
  var scope = angular.element(document.getElementById("loading")).scope();


  ///Events
  $scope.init = function(){
      $scope.deliveryman = serviceServer.getObject();   
  }
  
  $scope.save = function(){
    var scope = angular.element(document.getElementById("loading")).scope();
    scope.isLoading = true;
    
    if(!$scope.deliveryman.hasOwnProperty("Id"))
    {
      serviceServer.save(url, $scope.deliveryman).success(function(data){
        serviceServer.showInfoModal("Sucesso","Entregador salvo com sucesso!");
        $scope.reset();
        scope.isLoading = false;
      }); 
    }
    else{
      $scope.update();
    }
  }

  $scope.reset = function(){
    $scope.deliveryman = "";
  }
  
  $scope.update = function(){
      serviceServer.update(url, $scope.deliveryman).success(function(data){
        serviceServer.showInfoModal("Sucesso","Entregador atualizado com sucesso!");
        scope.isLoading = false;
      }); 
  }
  
   $scope.back = function(){
    window.history.back();  
   }

  $scope.reset();
})
