'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('InputFormController', function($scope) {
    $scope.parkingRecord = ParkingRecords.new();
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
  .controller('AddNewPersonController', function($scope, $modalInstance, Persons) {
    $scope.person = Persons.new();

    $scope.createPerson = function() {
      $scope.close(Persons.create($scope.person));
    }

    $scope.close = function (person) {
      $modalInstance.close(person);
    };
  })
  .controller('ContactController', function($scope, $modal, Persons) {
    $scope.allContacts = Persons.all();

    $scope.addNewContact = function() {

      var modalInstance = $modal.open({
        templateUrl: 'partials/create-new-contact.html',
        controller: 'AddNewPersonController',
      });

      modalInstance.result.then(function(person) {
        console.log($scope.parkingRecord);
        $scope.parkingRecord.contact = person;
        $scope.allContacts = Persons.all();
      });

    }
  })
  ;
