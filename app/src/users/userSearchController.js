'use strict'
angular.module('starterApp')
    .controller('userSearchController', function ($scope, $route, $routeParams,$mdDialog, $location, $http, serviceServer, serviceUser) {

        var url = 'http://localhost:50073/api/User';

        ///Methods
        $scope.allUsers = function () {
            serviceServer.getAll(url).success(function (users) {
                $scope.todos = users;
            });
        }
        $scope.allUsers();
                
        ///End Methods   

        ///Events client
        $scope.edit = function (user, event) {
            serviceUser.setUser(user);
        }

        $scope.delete = function (id, event) {
            var confirm = serviceServer.showConfirmModal("Alerta", "Deseja realmente remover este registro?");
            $mdDialog.show(confirm).then(function () {
                //scope.isLoading = true;
                serviceServer.delete(url, id)
                    .success(function (data) {
                        serviceServer.showInfoModal("Sucesso", "Usuário removido com sucesso!");
                        $scope.allUsers();
                        //scope.isLoading = false;
                    })
                    .error(function () {
                        serviceServer.showInfoModal("Erro", "Erro ao remover usuário!");
                       // scope.isLoading = false;
                    });
            }, function () {

            });
        }
        ///End Events
    });