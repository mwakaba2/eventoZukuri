'use strict';

angular
	.module('eventoZukuri')
	.controller('HomeCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state', function ($scope, $firebaseObject, $firebaseArray, $state) {
		$scope.currUser = firebase.auth().currentUser;
		$scope.$state = $state;
		if($scope.currUser) {
			var userId = $scope.currUser.uid;
			firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				$scope.name = snapshot.val().name;
			});
			console.log('User ' + $scope.currUser.uid + ' is logged in');
		} else {
			console.log('User is logged out.');
		}

		this.signOut = function() {
			firebase.auth().signOut().then(function() {
				// Sign-out successful.
				console.log("Successfully signed out!");
				$scope.currUser = undefined;
				if($state.is('home.events.create_event')) {
					$state.go('home.events');
				} else {
					$scope.$apply();
				}
			}, function(error) {
				// An error happened.
			});
		};
	}]);
