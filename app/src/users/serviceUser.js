(function () {
  'use strict';

  angular.module('starterApp')
    .service('serviceUser', function ($mdDialog) {

      var user;

      this.getUser = function () {
        return user;
      }

      this.setUser = function (pUser) {
        user = pUser;
      }

      return this;
    });
})();
