'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('InputFormController', function($scope) {
    $scope.parking_record = ParkingRecords.new();
  })
  .controller('YearController', function($scope, minYear, maxYear) {
    $scope.minYear = minYear;
    $scope.maxYear = maxYear;
  })
  .controller('PermitNumberController', function($scope, minPermitNumber, maxPermitNumber) {
    $scope.minPermitNumber = minPermitNumber;
    $scope.maxPermitNumber = maxPermitNumber;
  })
  .controller('LotController', function($scope, Lots) {
    $scope.allLots = Lots.all();
  })
  .controller('TypeController', function($scope, Types) {
    $scope.allTypes = Types.all();
  })
  .controller('PaymentTypeController', function($scope, PaymentTypes) {
    $scope.allPaymentTypes = PaymentTypes.all();
  })
  .controller('SportController', function($scope, Sports) {
    $scope.allSports = Sports.all();
  })
  .controller('DepartmentController', function($scope, Departments) {
    $scope.allDepartments = Departments.all();
  })
  ;
