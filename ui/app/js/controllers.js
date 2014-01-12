'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('InputFormController', function($scope) {
    $scope.parking_record = {
      number_of_permits: 0,
      has_placard: false,
      is_handicapped: false,
      is_wheel_chair_accessible: false,
      is_return: false,
      year: 2007,
      first_permit_number: 0,
      last_permit_number: 0,
      lot: 123,
      type: 123,
      payment_type: 123,
      sport: 'football!',
      department: 'nuclear engineering',
      person: 'Ashly!'
    };
  })
  .controller('YearController', function($scope, min_year, max_year) {
    $scope.min_year = min_year;
    $scope.max_year = max_year;
  })
  ;
