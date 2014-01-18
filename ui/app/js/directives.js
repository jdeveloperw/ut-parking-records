'use strict';

/* Directives */

var createValidatorLink = function(directiveName, isValid) {
  return function(scope, elm, attrs, ctrl) {
    ctrl.$parsers.unshift(function(viewValue) {
      if (isValid(viewValue, scope)) {
        ctrl.$setValidity(directiveName, true);
        return viewValue;
      } else {
        ctrl.$setValidity(directiveName, false);
        return undefined;
      }
    });
  }
}

var Validator = function(directiveName, isValid) {
  return {
    require: 'ngModel',
    link: createValidatorLink(directiveName, isValid)
  };
};

/* TODO is the correct way to use _ ? */
var ContainmentValidator = function(directiveName, getContainer) {
  return Validator(directiveName, function(viewValue) {
    return _.contains(getContainer(), viewValue);
  });
};

angular.module('myApp.directives', ['myApp.services'])
  .directive('inContainer', function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        container: '=inContainer',
      },
      link: createValidatorLink('inContainer', function(viewValue, scope) {
          return _.contains(scope.container, viewValue);
      })
    };
  })
  .directive('validLot', function(Lots) {
    return ContainmentValidator('validLot', Lots.all);
  })
  .directive('validType', function(Types) {
    return ContainmentValidator('validType', Types.all);
  })
  .directive('validPaymentType', function(PaymentTypes) {
    return ContainmentValidator('validPaymentType', PaymentTypes.all);
  })
  .directive('validSport', function(Sports) {
    return ContainmentValidator('validSport', Sports.all);
  })
  .directive('validDepartment', function(Departments) {
    return ContainmentValidator('validDepartment', Departments.all);
  })
  ;
