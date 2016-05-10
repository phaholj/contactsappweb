'use strict';

app.factory('ContactsFactory', ['$http', function($http) {
	
    var listmyContacts = [
    {id: 1, name: 'Allan Benjamin', phone: '27188339933', address: 'St. Claire Avenue, N: 7658'},
    {id: 2, name: 'Georgia Smith', phone: '27765824596', address: 'St. Paul Avenue, N: 5544'},
    {id: 3, name: 'Gregory Levinsky', phone: '27845295741', address: 'St. Piter Avenue, N: 9944'},
    {id: 4, name: 'Jackeline Macfly', phone: '27958652471', address: 'St. Jorge Avenue, N: 2299'},
    {id: 5, name: 'Joseph Climber', phone: '27625841279', address: 'St. Claire Avenue, N: 8849'},
    {id: 6, name: 'Joshua Jackson', phone: '27758485125', address: 'St. Histo Latino, N: 1095'},
	{id: 7, name: 'Kobus Sand', phone: '27659584758', address: 'St. Drive Latino, N: 1441'}
  ];
  
    var obj = {};
	
	obj.list = listmyContacts;
	
	obj.getContacts = function(){
		return listmyContacts;
    };
	
	
	obj.UpdateContact = function(contact){
	return obj.list = obj.list.map( function (element) {
          if ( element.id === contact.id){
            element = contact;
          }
          return element;
        });
		
	};
	
	
	obj.SaveContact = function (contact) {
		return obj.list.push({
		   id: obj.list.length + 1,
		   name: contact.name,
		   phone: contact.phone,
		   address: contact.address
		});
	};

    return obj;   
}]);


