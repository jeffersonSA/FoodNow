(function () {
  'use strict';

  angular.module('starterApp')
    .service('serviceClient', function ($mdDialog,$resource) {

      var client;

      this.getClient = function () {
        return client;
      }

      this.setClient = function (pClient) {
        client = pClient;
      }
      
      this.getCep = function(cep){
          var rest = $resource('https://viacep.com.br/ws/:cep/json/',{'cep': cep})
          return rest;
      }

      return this;
    });
})();
