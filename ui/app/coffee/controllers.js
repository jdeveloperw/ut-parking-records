// Generated by CoffeeScript 1.6.3
(function() {
  var InputFormController, module;

  module = angular.module('myApp.controllers', ['myApp.services']);

  app.controller('InputFormController', InputFormController = (function() {
    function InputFormController($scope) {
      this.$scope = $scope;
      $scope.parkingRecord = ParkingRecords["new"]();
    }

    return InputFormController;

  })());

}).call(this);
