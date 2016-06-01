'use strict'
angular
.module('starterApp')
.controller('deliverymanSearchController',  function ($scope, $route, $routeParams,$mdDialog, $location, $http, serviceServer) {
          var url = 'http://localhost:50073/api/Deliveryman';

        ///Methods
        $scope.allDeliverymen = function () {
            serviceServer.getAll(url).success(function (deliveryman) {
                $scope.todos = deliveryman;
            });
        }
        $scope.allDeliverymen();
                
        ///End Methods   

        ///Events client
        $scope.edit = function (deliveryman, event) {
            serviceServer.setObject(deliveryman);
        }
        
        $scope.newData = function(){
           serviceServer.setObject(null); 
        }

        $scope.delete = function (id, event) {
            var confirm = serviceServer.showConfirmModal("Alerta", "Deseja realmente remover este registro?");
            $mdDialog.show(confirm).then(function () {
                //scope.isLoading = true;
                serviceServer.delete(url, id)
                    .success(function (data) {
                        serviceServer.showInfoModal("Sucesso", "Entregador removido com sucesso!");
                        $scope.allDeliverymen();
                        //scope.isLoading = false;
                    })
                    .error(function () {
                        serviceServer.showInfoModal("Erro", "Erro ao remover entregador!");
                       // scope.isLoading = false;
                    });
            }, function () {

            });
        }
})
