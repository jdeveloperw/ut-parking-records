'use strict';

/* Directives */

var INTEGER_REGEXP = /^\-?\d+$/;
var NON_NEGATIVE_INTEGER_REGEXP = /^\d+$/;
var POSITIVE_INTEGER = /^[1..9]\d*$/;

angular.module('myApp.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  /* TODO DRY */
  .directive('nonNegativeInteger', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (NON_NEGATIVE_INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('nonNegativeInteger', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('nonNegativeInteger', false);
            return undefined;
          }
        });
      }
    };
  })
  .directive('positiveInteger', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (NON_NEGATIVE_INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('positiveInteger', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('positiveInteger', false);
            return undefined;
          }
        });
      }
    };
  })
  ;
