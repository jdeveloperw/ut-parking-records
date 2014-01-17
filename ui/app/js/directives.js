'use strict';

/* Directives */

var INTEGER_REGEXP = /^\-?\d+$/;
var NON_NEGATIVE_INTEGER_REGEXP = /^\d+$/;
var POSITIVE_INTEGER = /^[1..9]\d*$/;

var Validator = function(directiveName, isValid) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (isValid(viewValue)) {
          ctrl.$setValidity(directiveName, true);
          return viewValue;
        } else {
          ctrl.$setValidity(directiveName, false);
          return undefined;
        }
      });
    }
  };
};

var RegExpValidator = function(directiveName, regexp) {
  return Validator(directiveName, function(viewValue) {
      return regexp.test(viewValue);
  });
};

var IntegerRangeValidator = function(directiveName, minValue, maxValue) {
  return Validator(directiveName, function(viewValue) {
    var value = parseInt(viewValue)
    return minValue <= value && value <= maxValue;
  });
};

var ContainmentValidator = function(directiveName, getContainer) {
  return Validator(directiveName, function(viewValue) {
    return _.contains(getContainer(), viewValue);
  });
};

angular.module('myApp.directives', ['myApp.services'])
  .directive('nonNegativeInteger', function() {
    return RegExpValidator('nonNegativeInteger', NON_NEGATIVE_INTEGER_REGEXP);
  })
  .directive('positiveInteger', function() {
    return RexExpValidator('positiveInteger', POSITIVE_INTEGER);
  })
  .directive('validYear', function(minYear, maxYear) {
    return IntegerRangeValidator('validYear', minYear, maxYear);
  })
  .directive('validPermitNumber', function(minPermitNumber, maxPermitNumber) {
    return IntegerRangeValidator('validPermitNumber',
                                 minPermitNumber,
                                 maxPermitNumber);
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
