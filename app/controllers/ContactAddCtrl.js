'use strict';
   
   app.controller('ContactAddCtrl', function ($scope, $http, $location, AlertService, ContactsFactory) {
       
	  var message = '';
	  
	  // Add new contacts
      $scope.save = function(contact) {
		  ContactsFactory.SaveContact(contact);
		  
		  // Display the message
		  message = 'Contact "' + contact.name+ '" was added successfully.';
          AlertService.add('success', message, 5000);
		  
		  $location.path('/');
      };
	  
   });