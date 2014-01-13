'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('InputFormController', function($scope) {
    $scope.parking_record = ParkingRecords.new();
  })
  .controller('YearController', function($scope, min_year, max_year) {
    $scope.min_year = min_year;
    $scope.max_year = max_year;
  })
  .controller('PermitNumberController', function($scope, min_permit_number, max_permit_number) {
    $scope.min_permit_number = min_permit_number;
    $scope.max_permit_number = max_permit_number;
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
