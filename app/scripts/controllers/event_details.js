angular
	.module('eventoZukuri')
	.controller('EventDetailsCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$stateParams' , function ($scope, $firebaseObject, $firebaseArray, $stateParams) {
		$scope.currUser = firebase.auth().currentUser;
		var eventId = $stateParams.event_id;
		firebase.database().ref('/events/' + eventId).once('value').then(function(snapshot) {
			$scope.event = snapshot.val();
			$scope.$apply();
		});
	}]);

