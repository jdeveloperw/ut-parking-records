'use strict';

/* Services */

angular.module('myApp.services', [])
  .value('version', '0.1')
  // TODO Is the the correct way?
  /* These are inclusive */
  .value('min_year', '2007')
  .value('max_year', '2015')
  ;
