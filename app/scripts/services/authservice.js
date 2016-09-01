'use strict';

angular
  .module('eventoZukuri')
  .factory('AuthService', function () {
		var currentUser;
		var userId;
		return {
			login: function(email, password) {
				return firebase.auth().signInWithEmailAndPassword(email, password);
			},
			logout: function() {
				return firebase.auth().signOut();
			},
			isLoggedIn: function() {
				if ((currentUser = firebase.auth().currentUser)) {
					return true;
				}
				return false;
			},
			currentUser: function() {
				if(currentUser) {
					userId = currentUser.uid;
					return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
						return snapshot.val();
					});
				}
			},
			userId: function() {
				if(currentUser) {
					return currentUser.uid;
				}
			}
		};
});
