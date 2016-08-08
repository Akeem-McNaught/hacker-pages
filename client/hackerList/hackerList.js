Template.hackerList.onCreated(function(){
	Meteor.subscribe('hackers');
});

Meteor.hackerList.helpers({

	'Hackers': function(){
		return Hackers.find();
	}
});

