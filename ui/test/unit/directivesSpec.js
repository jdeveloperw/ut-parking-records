'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

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
});
