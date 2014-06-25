// Generated by CoffeeScript 1.6.3
(function() {
  var module;

  module = angular.module('myApp.filters', ['myApp.services']);

  module.filter('interpolate', [
    'version', function(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
  ]);

}).call(this);
