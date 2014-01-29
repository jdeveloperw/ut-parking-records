Instantiate the module with a dependency on the services module.

    module = angular.module 'myApp.controllers', ['myApp.services']

Create a controller for the parking record form.
We're using AngularJS's 'Controller As' syntax,
which allows us to set properties on a controller object,
which the template can access.

    module.controller 'InputFormController',
      class InputFormController
        constructor: (ParkingRecords) ->
          @parkingRecord = ParkingRecords.new();

Controller for the Year input field.

    module.controller 'YearController',
      class YearController
        constructor: (@minYear, @maxYear) ->

Controller for the permit number input field

    module.controller 'PermitNumberController',
      class PermitNumberController
        constructor: (@minPermitNumber, @maxPermitNumber) ->

Controller for the parking lot input field

    module.controller 'LotController',
      class LotController
        constructor: (Lots) ->
          @allLots = Lots.all()

Controller for the type input field

    module.controller 'TypeController',
      class TypeController
        constructor: (Types) ->
          @allTypes = Types.all()

Controller for the payment type input field

    module.controller 'PaymentTypeController',
      class PaymentTypeController
        constructor: (PaymentTypes) ->
          @allPaymentTypes = PaymentTypes.all()

Controller for the sport input field

    module.controller 'SportController',
      class SportController
        constructor: (Sports) ->
          @allSports = Sports.all()

Controller for the department input field

    module.controller 'DepartmentController',
      class DepartmentController
        constructor: (Departments) ->
          @allDepartments = Departments.all()

Controller for the add new person form

    module.controller 'AddNewPersonController',
      class AddNewPersonController
        constructor: (@$modalInstance, @Persons) ->
          @person = @Persons.new()

        createPerson: ->
          @close @Persons.create @person

        close: (person) ->
          @$modalInstance.close person

Controller for the contact input field

    module.controller 'ContactController',
      class ContactController
        constructor: (@$modal, @Persons) ->
          @allContacts = @Persons.all()

When addNewContact() is called, it will open a modal with the new contact form

        addNewContact: ->

          modalInstance = @$modal.open {
            templateUrl: 'partials/create-new-contact.html',
            controller: 'AddNewPersonController as addNewPerson',
          }

          Persons = @Persons

          modalInstance.result.then (person) ->
            # TODO how to do this without referring to $scope?
            # @$scope.parkingRecord.contact = person
            # TODO Use scope.$watch instead or broadcast event from Persons service
            @allContacts = Persons.all()
