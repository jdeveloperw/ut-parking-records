'use strict';

/* Services */

var Lots = {
  all: function() {
    return [ 'AA', 'CG', 'GT' ];
  }
}


var Types = {
  all: function() {
    return ['this', 'that', 'the other'];
  }
}


var PaymentTypes = {
  all: function() {
    return ['cash', 'check', 'card', 'chicken'];
  }
}


var Sports = {
  all: function() {
    return ['football', 'basketball', 'lady vols', 'luge'];
  }
}


var Departments = {
  all: function() {
    return ['nuclear engineering', 'EECS', 'BOS'];
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
      type: 'this',
      payment_type: 'chicken',
      sport: 'football',
      department: 'nuclear engineering',
      person: 'Ashly!'
    }
  }
}


angular.module('myApp.services', [])
  .value('version', '0.1')
  /* These are inclusive */
  .value('min_year', '2007')
  .value('max_year', '2015')
  /* TODO distinguish between first_permit_number and last_permit_number? */
  /* These are inclusive */
  .value('min_permit_number', 0)
  .value('max_permit_number', 1000)
  .service('ParkingRecords', function() {
    return ParkingRecords;
  })
  .service('Lots', function() {
    return Lots;
  })
  .service('Types', function() {
    return Types;
  })
  .service('PaymentTypes', function() {
    return PaymentTypes;
  })
  .service('Sports', function() {
    return Sports;
  })
  .service('Departments', function() {
    return Departments;
  })
  ;
