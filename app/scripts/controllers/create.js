'use strict';

angular
	.module('eventoZukuri')
	.controller('CreateCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
		$scope.currUser = firebase.auth().currentUser;
		if($scope.currUser) {
			var userId = $scope.currUser.uid;
			firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				$scope.name = snapshot.val().name;
				// writeNewEvent(userId, $scope.name, "Hello Chicago", "This is a cool event");
			});
		} else {
			console.log("User is logged out.");
		}

		function writeNewEvent(uid, username, title, body) {
			// A post entry.
			var eventData = {
			author: username,
			uid: uid,
			title: title,
			type: 'fun',
			host: 'Groupon',
			start_time: '',
			end_time: '',
			location: 'Chicago',
			guest_list: [],
			message: body,
			img_url: ''
			};

			// Get a key for a new Post.
			var newEventKey = firebase.database().ref().child('events').push().key;

			// Write the new Event's data simultaneously in the Events list and the user's Event list.
			var updates = {};
			updates['/events/' + newEventKey] = eventData;
			updates['/user-events/' + uid + '/' + newEventKey] = eventData;

			return firebase.database().ref().update(updates);
		}

	}]);
