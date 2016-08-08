Meteor.subscribe('hackers');

Meteor.hackerList.helpers({

	'Hackers': function(){
		return Hackers.find();
	}
});