angular
	.module('eventoZukuri')
	.controller('EventsCtrl', function ($scope) {
		firebase.database().ref('/events').once('value').then(function(snapshot) {
			$scope.events = snapshot.val();
			$scope.$apply();
		});
	});
