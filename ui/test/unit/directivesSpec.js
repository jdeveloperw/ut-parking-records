'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

  describe('non-negative-integer', function() {
    var $scope, form;

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.somenum" name="somenum" non-negative-integer />' +
        '</form>'
      );
      $scope.model = { somenum: null }
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should pass with a non-negative integer', function() {
      form.somenum.$setViewValue('3');
      expect($scope.model.somenum).toEqual('3');
      expect(form.somenum.$valid).toBe(true);
    });

    it('should pass with a 0', function() {
      form.somenum.$setViewValue('0');
      expect($scope.model.somenum).toEqual('0');
      expect(form.somenum.$valid).toBe(true);
    });

    it('should not pass with a negative number', function() {
      form.somenum.$setViewValue('-1');
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should not pass with a float', function() {
      form.somenum.$setViewValue('1.0');
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should not pass with string', function() {
      form.somenum.$setViewValue('a');
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });

  describe('valid-year', function() {
    var $scope, form;
    var minYear = 2000;
    var maxYear = 2010;

    beforeEach(module('myApp.services', function($provide) {
      $provide.value('minYear', minYear);
      $provide.value('maxYear', maxYear);
    }));

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.somenum" name="somenum" valid-year />' +
        '</form>'
      );
      $scope.model = { somenum: null }
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should not pass with a float', function() {
      form.somenum.$setViewValue(1.0);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should not pass with string', function() {
      form.somenum.$setViewValue('a');
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should not pass with an integer less than min year', function() {
      form.somenum.$setViewValue(minYear - 1);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should not pass with an integer greater than max year', function() {
      form.somenum.$setViewValue(maxYear + 1);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should pass with an integer equal to min year', function() {
      form.somenum.$setViewValue(minYear);
      expect($scope.model.somenum).toEqual(minYear);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should pass with an integer equal to max year', function() {
      form.somenum.$setViewValue(maxYear);
      expect($scope.model.somenum).toEqual(maxYear);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should pass with an integer between min year and max year', function() {
      var year = minYear + 1;
      form.somenum.$setViewValue(year);
      expect($scope.model.somenum).toEqual(year);
      expect(form.somenum.$valid).toBe(true);
    });
  });

  describe('valid-permit-number', function() {
    var $scope, form;
    var lots = ['a','b','c'];

    beforeEach(module('myApp.services', function($provide) {
      $provide.value('Lots', {
        all: function() {
          return lots;
        }
      });
    }));

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<select ng-model="model.somenum" name="somenum" valid-lot></select>' +
        '</form>'
      );

      $scope.model = { somenum: null }
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should not pass with a value not in the list', function() {
      form.somenum.$setViewValue(1.0);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should pass with a value in the list', function() {
      var value = 'a';
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toEqual(value);
      expect(form.somenum.$valid).toBe(true);
    });
  });

  describe('match-regexp', function() {
    var $scope, form;

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.somenum" name="somenum" match-regexp="\'^a$\'" />' +
        '</form>'
      );

      $scope.model = { somenum: null }
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should pass with if the RegExp matches the value', function() {
      var value = 'a';
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toEqual(value);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should not pass if the RegExp does not match the value', function() {
      var value = 'b';
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });

  describe('in-containter', function() {
    var $scope, form;
    var container = ['a','b','c'];

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.somenum" name="somenum" in-container="container" />' +
        '</form>'
      );

      $scope.model = { somenum: null }
      $scope.container = container;
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should pass if the value is in the container', function() {
      var value = container[0];
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toEqual(container[0]);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should not pass with "d"', function() {
      var value = 'd';
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });

  describe('within-integer-range', function() {
    var $scope, form;
    /* TODO DRY */
    var min = 0;
    var max = 1;

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.somenum" name="somenum" min="min" max="max" within-integer-range />' +
        '</form>'
      );

      $scope.model = { somenum: null }
      $scope.min = min;
      $scope.max = max;
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should pass if the value is equal to the min', function() {
      form.somenum.$setViewValue(min);
      expect($scope.model.somenum).toEqual(min);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should pass if the value is equal to the max', function() {
      form.somenum.$setViewValue(max);
      expect($scope.model.somenum).toEqual(max);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should pass if the value is an integer within the range', function() {
      var value = min + 1;
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toEqual(value);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should pass fail if the value is less than the min', function() {
      var value = min - 1;
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });

    it('should pass fail if the value is greater than the max', function() {
      var value = max + 1;
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });
});
