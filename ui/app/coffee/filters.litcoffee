Instantiate the module with no dependencies

    module = angular.module 'myApp.filters', []

Create a filter for returning the application version.
Whereever we see "%VERSION%" in a template,
we'll replace it with the app version.

    module.filter 'interpolate', ['version', (version) ->
      return (text) ->
        return String(text).replace /\%VERSION\%/mg, version
      ]
