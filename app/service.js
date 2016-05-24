'use strict'
angular
  .module('starterApp')

  .service("serviceServer", function ($http, $mdDialog) {

    this.getAll = function (url) {
      return $http.get(url);
    }

    this.getById = function (url, id) {

    }

    this.save = function (url, obj) {
      return $http.post(url, obj);
    }

    this.delete = function (url, id) {
      return $http.delete(url + "/" + id);
    }

    this.update = function (url, obj) {
      return $http.put(url, obj);
    }

    this.isLoading = function (value) {
      //$scope.isLoading = value;
    }

    this.showInfoModal = function (title, content) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title(title)
          .textContent(content)
          .ariaLabel('')
          .ok('Ok')
          .openFrom()
          .closeTo());
    }
    
    this.showConfirmModal = function(title, content){
         var confirm = $mdDialog.confirm()
                .title(title)
                .textContent(content)
                .ariaLabel('')
                .cancel('Não')
                .ok('Sim')
                .openFrom()
                .closeTo();

            return confirm;
    }
    
    return this;

  })
