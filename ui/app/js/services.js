'use strict';

/* Services */
/* TODO API equivalent of ORM */

angular.module('myApp.services', [])
  .value('version', '0.1')
  /* These are inclusive */
  .value('minYear', '2007')
  .value('maxYear', '2015')
  /* TODO distinguish between first_permit_number and last_permit_number? */
  /* These are inclusive */
  .value('minPermitNumber', 0)
  .value('maxPermitNumber', 1000)
  .service('ParkingRecords', function() {
    /* TODO move this definition elsewhere? */
    var ParkingRecords = {
      new: function() {
        return {
          numberOfPermits: 0,
          hasPlacard: false,
          isHandicapped: true,
          isWheelchairAccessible: false,
          isReturn: true,
          year: 2007,
          firstPermitNumber: 0,
          lastPermitNumber: 0,
          lot: 'CG',
          type: 'this',
          paymentType: 'chicken',
          sport: 'football',
          department: 'nuclear engineering',
          contact: ''
        }
      }
    }
    return ParkingRecords;
  })
  .service('Lots', function() {
    var Lots = {
      all: function() {
        return [ 'AA', 'CG', 'GT' ];
      }
    }
    return Lots;
  })
  .service('Types', function() {
    var Types = {
      all: function() {
        return ['this', 'that', 'the other'];
      }
    }
    return Types;
  })
  .service('PaymentTypes', function() {
    var PaymentTypes = {
      all: function() {
        return ['cash', 'check', 'card', 'chicken'];
      }
    }
    return PaymentTypes;
  })
  .service('Sports', function() {
    var Sports = {
      all: function() {
        return ['football', 'basketball', 'lady vols', 'luge'];
      }
    }
    return Sports;
  })
  .service('Departments', function() {
    var Departments = {
      all: function() {
        return ['nuclear engineering', 'EECS', 'BOS'];
      }
    }
    return Departments;
  })
  .service('Persons', function() {

    var mockPersons = [{
      id: '1234',
      netId: 'ashly',
      firstName: 'Ashly',
      lastName: 'Pearson',
      email: 'ashry@utk.edu',
    }];

    var Persons = {
      all: function() {
        return mockPersons;
      },
      new: function() {
        return {
          id: '',
          netId: '',
          firstName: '',
          lastName: '',
          email: '',
        }
      },
      create: function(person) {
        mockPersons.push(person);
        return person;
      },
      read: function() {
      },
      update: function(person) {
      },
      delete: function() {
      }
    }

    return Persons;
  })
  ;
