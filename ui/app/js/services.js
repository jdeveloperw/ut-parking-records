'use strict';

/* Services */

var Lots = {
  all: function() {
    return [ 'AA', 'CG', 'GT' ];
  }
}


var ParkingRecords = {
  new: function() {
    return {
      number_of_permits: 0,
      has_placard: false,
      is_handicapped: false,
      is_wheel_chair_accessible: false,
      is_return: false,
      year: 2007,
      first_permit_number: 0,
      last_permit_number: 0,
      lot: 'CG',
      type: 123,
      payment_type: 123,
      sport: 'football!',
      department: 'nuclear engineering',
      person: 'Ashly!'
    }
  }
}


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
    return Lots;
  })
  .service('ParkingRecords', function() {
    return ParkingRecords;
  })
  ;
