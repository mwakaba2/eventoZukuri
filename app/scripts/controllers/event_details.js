angular
	.module('eventoZukuri')
	.controller('EventDetailsCtrl', function ($scope, $stateParams) {
		var eventId = $stateParams.event_id;
		firebase.database().ref('/events/' + eventId).once('value', function(snapshot) {
			$scope.event = snapshot.val();
			$scope.$apply();
		});
	});

