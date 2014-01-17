'use strict';

/* Directives */

var INTEGER_REGEXP = /^\-?\d+$/;
var NON_NEGATIVE_INTEGER_REGEXP = /^\d+$/;
var POSITIVE_INTEGER = /^[1..9]\d*$/;

var createValidator = function(directiveName, isValid) {
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
}

var createRexExpValidator = function(directiveName, regexp) {
  return createValidator(directiveName, function(viewValue) {
      return regexp.test(viewValue);
  });
}

angular.module('myApp.directives', ['myApp.services'])
  /* TODO DRY */
  .directive('nonNegativeInteger', function() {
    return createRexExpValidator('nonNegativeInteger', NON_NEGATIVE_INTEGER_REGEXP);
  })
  .directive('positiveInteger', function() {
    return createRexExpValidator('positiveInteger', POSITIVE_INTEGER);
  })
  .directive('validYear', function(minYear, maxYear) {
    return createValidator('validYear', function(viewValue) {
      var year = parseInt(viewValue)
      return minYear <= year && year <= maxYear;
    })
  })
  .directive('validPermitNumber', function(min_permit_number, max_permit_number) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          var permit_number = parseInt(viewValue)
          if (min_permit_number <= permit_number && permit_number <= max_permit_number) {
            ctrl.$setValidity('validPermitNumber', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validPermitNumber', false);
            return undefined;
          }
        });
      }
    };
  })
  .directive('validLot', function(Lots) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (_.contains(Lots.all(), viewValue)) {
            ctrl.$setValidity('validLot', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validLot', false);
            return undefined;
          }
        });
      }
    };
  })
  .directive('validType', function(Types) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (_.contains(Types.all(), viewValue)) {
            ctrl.$setValidity('validType', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validType', false);
            return undefined;
          }
        });
      }
    };
  })
  .directive('validPaymentType', function(PaymentTypes) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (_.contains(PaymentTypes.all(), viewValue)) {
            ctrl.$setValidity('validPaymentType', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validPaymentType', false);
            return undefined;
          }
        });
      }
    };
  })
  .directive('validSport', function(Sports) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (_.contains(Sports.all(), viewValue)) {
            ctrl.$setValidity('validSport', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validSport', false);
            return undefined;
          }
        });
      }
    };
  })
  .directive('validDepartment', function(Departments) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (_.contains(Departments.all(), viewValue)) {
            ctrl.$setValidity('validDepartment', true);
            return viewValue;
          } else {
            ctrl.$setValidity('validDepartment', false);
            return undefined;
          }
        });
      }
    };
  })
  ;
