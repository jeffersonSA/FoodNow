'use strict'
angular.module('starterApp')
    .controller('clientSearchController', function ($scope, $route, $routeParams, $mdDialog, $location, $http, serviceServer, serviceClient) {

        var url = 'http://localhost:50073/api/Client';

        ///Methods
        $scope.getAllClients = function () {
            serviceServer.getAll(url).success(function (client) {
                $scope.lstClients = client;
            });
        }

        $scope.getAllClients();
        ///End Methods

        ///Events

        $scope.edit = function (client, event) {
            serviceClient.setClient(client);
        }

        $scope.delete = function (id, event) {
            var confirm = serviceServer.showConfirmModal("Alerta", "Deseja realmente remover este registro?");
            $mdDialog.show(confirm).then(function () {
                //scope.isLoading = true;
                serviceServer.delete(url, id)
                    .success(function (data) {
                        serviceServer.showInfoModal("Sucesso", "Cliente removido com sucesso!");
                        $scope.getAllClients();
                        //scope.isLoading = false;
                    })
                    .error(function () {
                        serviceServer.showInfoModal("Erro", "Erro ao remover Cliente!");
                        // scope.isLoading = false;
                    });
            }, function () {

            });
        }

        ///End Events
    });