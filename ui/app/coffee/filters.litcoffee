Instantiate the module with a dependency on the services module

    module = angular.module 'myApp.filters', ['myApp.services']

Create a filter for returning the application version.
Whereever we see "%VERSION%" in a template,
we'll replace it with the app version.

    module.filter 'interpolate', ['version', (version) ->
      return (text) ->
        return String(text).replace /\%VERSION\%/mg, version
      ]
