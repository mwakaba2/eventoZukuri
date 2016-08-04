'use strict';

angular
	.module('eventoZukuri')
	.controller('RegisterCtrl', ['$state', '$firebaseObject', function ($state, $firebaseObject) {
		var ref = firebase.database().ref();
		this.data = $firebaseObject(ref);

		this.signUp = function (name, email, password, employer, jobTitle, bday) {
			firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
				console.log("Creating user: ", user.uid);
				saveUser(user.uid, name, email, employer, jobTitle, bday);
				$state.go('home.events');
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("Signing up failed: ", errorMessage);
			});
		};

		function saveUser(userId, name, email, employer, jobTitle, bday) {
			employer = employer === undefined ? '' : employer;
			jobTitle = jobTitle === undefined ? '' : jobTitle;
			bday = bday === undefined ? '' : bday;

			firebase.database().ref('users/' + userId).set({
				name: name,
				email: email,
				employer: employer,
				jobTitle: jobTitle,
				bday: bday
			});
		}

	}]);
