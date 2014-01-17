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
});
