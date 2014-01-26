'use strict';

/* Services */
/* TODO API equivalent of ORM */

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


var Contacts = {
  all: function() {
    return ['ashry', 'gerg', 'cromulus', 'gcc-pedantic'];
  }
}


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
      contact: ''
    }
  }
}


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
  .service('Persons', function() {
    return Persons;
  })
  ;
