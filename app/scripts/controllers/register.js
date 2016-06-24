'use strict';

angular
	.module('eventoZukuri')
	.controller('RegisterCtrl', ['$firebaseObject', function ($firebaseObject) {
		var ref = firebase.database().ref();
		this.data = $firebaseObject(ref);

		this.signUp = function () {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				if(errorMessage === undefined) {
					console.log("success!");
				} else {
					console.log(errorMessage);
				}
			});
		};

	}]);
