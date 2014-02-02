This function creates a linker function for a validator directive.

- Args:
  - directiveName: The name of the directive
  - isValid: function that takes a view value and returns true if the value is valid
- Return Value: the view value if isValid(viewValue) is true, otherwise undefined
- Side Effects: sets validity for the directive to true if isValid(viewValue) is true,
  otherwise sets validity to false


    createValidatorLinker = (directiveName, isValid) ->
      return (scope, elm, attrs, ctrl) ->
        ctrl.$parsers.unshift (viewValue) ->
          viewValueIsValid = isValid viewValue, scope
          ctrl.$setValidity directiveName, viewValueIsValid or false
          return if viewValueIsValid then viewValue else undefined

Instantiate the module with a dependency on the services module.

    module = angular.module 'myApp.directives', ['myApp.services']

This directive validates that the input value is in the container (list, set, JSON)

    module.directive 'inContainer', ->
      require: 'ngModel'
      restrict: 'A'
      scope:
        container: '=inContainer'
      link: createValidatorLinker 'inContainer', (viewValue, scope) ->
        return _.contains scope.container, viewValue
