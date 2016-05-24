'use strict'
angular
.module('starterApp')
.controller('clientController', function($scope, $route, $routeParams, $location,$http, $mdDialog,serviceServer, userService) {

  var url = 'http://localhost:50073/api/Client';
  var imagePath = 'img/list/60.jpeg';
  var scope = angular.element(document.getElementById("loading")).scope();

  ///Methods
  $scope.reset = function(){
    $scope.client = "";
  }
  /// End Metohds

  ///Events
  $scope.init = function(){
    // TODO $scope.user = clientService.getClient();
    
    $scope.userState ='';
    $scope.states = ('MT MS DF AM AC RO RR AP TO PA MA PI CE RN PB PE SE AL BA SP' +
    'RJ ES PR SC RS').split(' ').map(function(state){return{abbrev: state};});   
  }
  
   $scope.save = function(){
    var scope = angular.element(document.getElementById("loading")).scope();
    scope.isLoading = true;
    
    if(!$scope.client.hasOwnProperty("Id"))
    {
      serviceServer.save(url, $scope.client).success(function(data){
        serviceServer.showInfoModal("Sucesso","Cliente salvo com sucesso!");
        $scope.reset();
        scope.isLoading = false;
      }); 
    }
    else{
      $scope.update();
    }
  }
  
   $scope.update = function(){
      serviceServer.update(url, $scope.client).success(function(data){
        serviceServer.showInfoModal("Sucesso","Cliente atualizado com sucesso!");
        scope.isLoading = false;
      }); 
  }
  
   $scope.back = function(){
    window.history.back();  
   }
  ///End Events
  
 


})
