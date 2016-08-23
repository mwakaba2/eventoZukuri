'use strict';

angular
	.module('eventoZukuri')
	.controller('LoginCtrl', ['$state', '$firebaseObject', '$scope', function ($state, $firebaseObject, $scope) {
		var ref = firebase.database().ref();
		this.data = $firebaseObject(ref);
		$scope.signIn = function() {
			firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).then(function() {
				$state.go('home.events');
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				$scope.errorMessage = error.message;
			});
		};
	}]);
