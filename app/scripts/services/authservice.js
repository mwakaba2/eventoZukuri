'use strict';

angular
  .module('eventoZukuri')
  .factory('AuthService', function () {
		var currentUser;
		var userId;
		return {
			currentUser: function() {
				if(currentUser) {
					userId = currentUser.uid;
					return firebase.database().ref('/users/' + userId).once('value');
				}
			},
			login: function(email, password) {
				return firebase.auth().signInWithEmailAndPassword(email, password);
			},
			isLoggedIn: function() {
				if ((currentUser = firebase.auth().currentUser)) {
					return true;
				}
				return false;
			},
			logout: function() {
				return firebase.auth().signOut();
			},
			signup: function(email, passwd) {
				return firebase.auth().createUserWithEmailAndPassword(email, passwd).then(function() {
					currentUser = firebase.auth().currentUser;
				});
			},
			userId: function() {
				if(currentUser) {
					return currentUser.uid;
				}
			}
		};
});
