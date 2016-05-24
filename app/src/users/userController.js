'use strict'
angular
.module('starterApp')
.controller('userController', function($scope, $route, $routeParams, $location,$http, $mdDialog,serviceServer, serviceUser) {

  var url = 'http://localhost:50073/api/User';
  var imagePath = 'img/list/60.jpeg';
  var scope = angular.element(document.getElementById("loading")).scope();


  ///Events
  $scope.init = function(){
      $scope.user = serviceUser.getUser();   
  }
  
  $scope.save = function(){
    var scope = angular.element(document.getElementById("loading")).scope();
    scope.isLoading = true;
    
    if(!$scope.user.hasOwnProperty("Id"))
    {
      serviceServer.save(url, $scope.user).success(function(data){
        serviceServer.showInfoModal("Sucesso","Usuário salvo com sucesso!");
        $scope.reset();
        scope.isLoading = false;
      }); 
    }
    else{
      $scope.update();
    }
  }

  $scope.reset = function(){
    $scope.user = "";
  }
  
  $scope.update = function(){
      serviceServer.update(url, $scope.user).success(function(data){
        serviceServer.showInfoModal("Sucesso","Usuário atualizado com sucesso!");
        scope.isLoading = false;
      }); 
  }
  
   $scope.back = function(){
    window.history.back();  
   }

  $scope.reset();
 

  ///End Events
})
