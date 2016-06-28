'use strict';

angular
	.module('eventoZukuri')
	.controller('LoginCtrl', ['$firebaseObject', function ($firebaseObject) {
		var ref = firebase.database().ref();
		this.data = $firebaseObject(ref);
		
		this.signIn = function() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user) {
				console.log("Signed in as: ", user.uid);
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("Authentication Failed: ", errorMessage);
			});
		};
	}]);
