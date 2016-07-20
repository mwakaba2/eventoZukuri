'use strict';

angular
	.module('eventoZukuri')
	.controller('HomeCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
		$scope.currUser = firebase.auth().currentUser;

		if($scope.currUser) {
			var userId = $scope.currUser.id;
			firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				var name = snapshot.val().name;
				console.log(name);
			});
			console.log("User " + $scope.currUser.uid + " is logged in");
		} else {
			console.log("User is logged out.");
		}

	}]);
