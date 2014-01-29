// Generated by CoffeeScript 1.6.3
(function() {
  var AddNewPersonController, ContactController, DepartmentController, InputFormController, LotController, PaymentTypeController, PermitNumberController, SportController, TypeController, YearController, module;

  module = angular.module('myApp.controllers', ['myApp.services']);

  module.controller('InputFormController', InputFormController = (function() {
    function InputFormController(CurrentParkingRecord) {
      this.CurrentParkingRecord = CurrentParkingRecord;
      this.parkingRecord = this.CurrentParkingRecord;
    }

    return InputFormController;

  })());

  module.controller('YearController', YearController = (function() {
    function YearController(minYear, maxYear) {
      this.minYear = minYear;
      this.maxYear = maxYear;
    }

    return YearController;

  })());

  module.controller('PermitNumberController', PermitNumberController = (function() {
    function PermitNumberController(minPermitNumber, maxPermitNumber) {
      this.minPermitNumber = minPermitNumber;
      this.maxPermitNumber = maxPermitNumber;
    }

    return PermitNumberController;

  })());

  module.controller('LotController', LotController = (function() {
    function LotController(Lots) {
      this.allLots = Lots.all();
    }

    return LotController;

  })());

  module.controller('TypeController', TypeController = (function() {
    function TypeController(Types) {
      this.allTypes = Types.all();
    }

    return TypeController;

  })());

  module.controller('PaymentTypeController', PaymentTypeController = (function() {
    function PaymentTypeController(PaymentTypes) {
      this.allPaymentTypes = PaymentTypes.all();
    }

    return PaymentTypeController;

  })());

  module.controller('SportController', SportController = (function() {
    function SportController(Sports) {
      this.allSports = Sports.all();
    }

    return SportController;

  })());

  module.controller('DepartmentController', DepartmentController = (function() {
    function DepartmentController(Departments) {
      this.allDepartments = Departments.all();
    }

    return DepartmentController;

  })());

  module.controller('AddNewPersonController', AddNewPersonController = (function() {
    function AddNewPersonController($modalInstance, Persons) {
      this.$modalInstance = $modalInstance;
      this.Persons = Persons;
      this.person = this.Persons["new"]();
    }

    AddNewPersonController.prototype.createPerson = function() {
      return this.close(this.Persons.create(this.person));
    };

    AddNewPersonController.prototype.close = function(person) {
      return this.$modalInstance.close(person);
    };

    return AddNewPersonController;

  })());

  module.controller('ContactController', ContactController = (function() {
    function ContactController($modal, Persons, CurrentParkingRecord) {
      this.$modal = $modal;
      this.Persons = Persons;
      this.CurrentParkingRecord = CurrentParkingRecord;
      this.allContacts = this.Persons.all();
    }

    ContactController.prototype.addNewContact = function(CurrentParkingRecord) {
      var modalInstance,
        _this = this;
      modalInstance = this.$modal.open({
        templateUrl: 'partials/create-new-contact.html',
        controller: 'AddNewPersonController as addNewPerson'
      });
      return modalInstance.result.then(function(person) {
        _this.CurrentParkingRecord.contact = person;
        return _this.allContacts = _this.Persons.all();
      });
    };

    return ContactController;

  })());

}).call(this);
