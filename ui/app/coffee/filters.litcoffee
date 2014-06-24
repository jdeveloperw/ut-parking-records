Instantiate the module with no dependencies

    module = angular.module 'myApp.filters', []

Create a controller for the parking record form.
We're using AngularJS's 'Controller As' syntax,
which allows us to set properties on a controller object,
which the template can access.

    module.filter 'interpolate', ['version', (version) ->
      return (text) ->
        return String(text).replace /\%VERSION\%/mg, version
      ]
