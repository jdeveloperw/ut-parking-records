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

  describe('valid-regexp', function() {
    var $scope, form;

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
          '<input ng-model="model.somenum" name="somenum" regexp="\'^a$\'" validate-regexp />' +
        '</form>'
      );

      $scope.model = { somenum: null }
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    it('should pass with "a"', function() {
      var value = 'a';
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toEqual(value);
      expect(form.somenum.$valid).toBe(true);
    });

    it('should not pass with "b"', function() {
      var value = 'b';
      form.somenum.$setViewValue(value);
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });
});
