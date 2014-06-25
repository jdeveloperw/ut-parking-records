Instantiate the module with no dependencies

    module = angular.module 'myApp.services', []

Set some constants.
These will be replaced with API calls,
but I'll just mock them out for now.

    module.value 'version', '0.1'
    # These are inclusive
    module.value 'minYear', '2007'
    module.value 'maxYear', '2015'
    # TODO distinguish between first_permit_number and last_permit_number?
    # These are inclusive
    module.value 'minPermitNumber', 0
    module.value 'maxPermitNumber', 1000

## API Wrapper Services
These services wrap API calls.
Right now I'm just mocking out the data,
but I'll eventually use real API calls.

ParkingRecords CRUD Service

    module.service 'ParkingRecords', () ->
      return {
        new: () ->
          return {
            numberOfPermits: 0,
            hasPlacard: true,
            isHandicapped: true,
            isWheelchairAccessible: true,
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

(Parking) Lots CRUD Service

    module.service 'Lots', () ->
      return {
        # TODO use promises instead
        all: () ->
          return [ 'AA', 'CG', 'GT' ];
      }

Types CRUD Service.
Need to confirm with Greg what exactly these "types" are for.
The original field in the Microsoft Access database was unclear.

    module.service 'Types', () ->
      return {
        all: () ->
          return ['this', 'that', 'the other'];
      }

PaymentTypes CRUD Service

    module.service 'PaymentTypes', () ->
      return {
        all: () ->
          return ['cash', 'check', 'card', 'chicken'];
      }

Sports CRUD Service

    module.service 'Sports', () ->
      return {
        all: () ->
          return ['football', 'basketball', 'lady vols', 'luge'];
      }

Departments CRUD Service.
For example, "Department of Underwater Basketweaving Studies".

    module.service 'Departments', () ->
      return {
        all: () ->
          return ['nuclear engineering', 'EECS', 'BOS'];
      }

Persons CRUD Service.

    module.service 'Persons', () ->

      mockPersons = [{
        id: '1234',
        netId: 'ashly',
        firstName: 'Ashly',
        lastName: 'Pearson',
        email: 'ashry@utk.edu',
      }];

      return {
        all: () ->
          return mockPersons
        new: () ->
          return {
            id: '',
            netId: '',
            firstName: '',
            lastName: '',
            email: '',
          }
        create: (person) ->
          mockPersons.push(person);
          return person;
        read: () ->
        update: (person) ->
        delete: () ->
      }

Factory for creating a new parking record on the client side.

    module.factory 'CurrentParkingRecord', () ->
      return {
        numberOfPermits: 0,
        hasPlacard: true,
        isHandicapped: true,
        isWheelchairAccessible: true,
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
