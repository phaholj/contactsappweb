 'use strict';
 
  app.controller('ContactEditCtrl', function ($scope, $http, $location, $routeParams, $filter, AlertService, ContactsFactory) {
	  
      var id = $routeParams.id;
	  $scope.ContactDetail = [];
	  var message = '';
	  
	  // Load contact and filter the data
	  $scope.listOfContacts = [];
	  $scope.listOfContacts =  ContactsFactory.getContacts();

	  $scope.ContactDetail = $filter('filter')($scope.listOfContacts, {
                id: id
            });
	  
	  
	  // Save contacts
      $scope.save = function(contact) {
          //$http.put('/contactsapp/api/contacts/'+id, contact).success(function(data) {
          //$scope.ContactDetail = data;
		  ContactsFactory.UpdateContact(contact);
		  
		  // Display the message
		  message = 'Contact "' + contact.name + '" with id "' + contact.id+ '" was updated successfully.';
          AlertService.add('success', message, 5000);
		  
		  $location.path('/');
        //}); 
      };
	  
  });