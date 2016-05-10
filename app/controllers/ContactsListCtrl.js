/* globals confirm */
'use strict';

app.controller('ContactsListCtrl', function ($scope, $location, $routeParams, $route, $filter, AlertService, ContactsFactory) {

    /**
     * Initial value of form
     *
     * @type {Array}
     */
    $scope.contact = [];
	$scope.listOfContacts = [];
	
	//$scope.status = ''; 

    /**
     * Order by verification for template
     * @type {Boolean}
     */
    $scope.reverse = false;

    /**
     * field used for table ordenation
     * @type {String}
     */
    $scope.predicate = 'name';

    /**
     * Limit to initial value
     * @type {Number}
     */
    $scope.currentPage = 0;

    /**
     * Page quantity for data visualization
     * @type {Number}
     */
    $scope.pageSize = 20;

    /**
     * Returns the number page based in params
     * @return {[type]} [description]
     */
    $scope.numberOfPages = function(){
      return Math.ceil($scope.listOfContacts.length/$scope.pageSize);
    };

    /**
     * [delete description]
     * @param  {Object} item          [description]
     * @param  {Boolean} confirmation [description]
     */
    $scope.delete = function( item, confirmation ){
      confirmation = (typeof confirmation !== 'undefined') ? confirmation : true;
      if (confirmDelete(confirmation)) {
		$scope.deleteContact(item);
      }
    };


    /**
     * Method for access "window.confirm" function
     * @param  {Boolean} confirmation [description]
     * @return {Boolean}              [description]
     */
    var confirmDelete = function(confirmation){
      return confirmation ? confirm('This action is irreversible. Do you want to delete this contact?') : true;
    };

    /**
     * Load Contacts Data
	 *
     */	 
	function getContacts() {
		var message = '';
		$scope.listOfContacts = $scope.filteredData = ContactsFactory.getContacts();
    }
	
    /**
     * Method for deleting contact
     * 
     */
	$scope.deleteContact = function (item) {
		var message = '';
		
		var index = $scope.listOfContacts.indexOf(item);
        $scope.listOfContacts.splice(index, 1); 
		
		message = 'Deleted Contact! Refreshing contact list.';
		AlertService.add('success', message, 5000);	
    };
		
		
	/**
     * Method for class initialization
     * @return {[type]} [description]
     */
    $scope.init = function(){
	  getContacts();
	  
      //  Calling routeParam method
      if ($route.current.method !== undefined) {
        $scope[$route.current.method]();
      }
    };
	
    $scope.init();
	
  });