angular
	.module('eventoZukuri')
	.controller('EventsCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
		firebase.database().ref('/events').once('value').then(function(snapshot) {
			$scope.events = snapshot.val();
			$scope.$apply();
		});
	}]);
