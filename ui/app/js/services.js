'use strict';

/* Services */

angular.module('myApp.services', [])
  .value('version', '0.1')
  // TODO Is the the correct way?
  /* These are inclusive */
  .value('min_year', '2007')
  .value('max_year', '2015')
  /* TODO distinguish between first_permit_number and last_permit_number? */
  /* These are inclusive */
  .value('min_permit_number', 0)
  .value('max_permit_number', 1000)
  .service('Lots', function() {
    return {
      all: function() {
        return [ 'AA', 'CG', 'GT' ];
      }
    }
  })
  ;
