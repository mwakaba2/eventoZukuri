'use strict';

angular
	.module('eventoZukuri')
	.controller('LoginCtrl', ['$state', '$firebaseObject', function ($state, $firebaseObject) {
		var ref = firebase.database().ref();
		this.data = $firebaseObject(ref);
		
		this.signIn = function() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user) {
				console.log("Signed in as: ", user.uid);
				$state.go('home');
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("Authentication Failed: ", errorMessage);
			});
		};
	}]);
