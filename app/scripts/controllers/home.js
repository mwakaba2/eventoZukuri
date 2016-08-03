'use strict';

angular
	.module('eventoZukuri')
	.controller('HomeCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
		$scope.currUser = firebase.auth().currentUser;
		var recentEventsRef = firebase.database().ref('events');
		$scope.events = $firebaseArray(recentEventsRef);
		console.log($scope.events);
		if($scope.currUser) {
			var userId = $scope.currUser.uid;
			firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				$scope.name = snapshot.val().name;
				// writeNewEvent(userId, $scope.name, "Hello Chicago", "This is a cool event");
			});
			console.log("User " + $scope.currUser.uid + " is logged in");


		} else {
			console.log("User is logged out.");
		}

		this.signOut = function() {
			firebase.auth().signOut().then(function() {
			  // Sign-out successful.
			  console.log("Successfully signed out!");
			  $scope.currUser = undefined;
			  $scope.$apply();
			}, function(error) {
			  // An error happened.
			});
		};

		// function writeNewEvent(uid, username, title, body) {
		//   // A post entry.
		//   var eventData = {
		//     author: username,
		//     uid: uid,
		//     title: title,
		//     type: 'fun',
		//     host: 'Groupon',
		//     start_time: '',
		//     end_time: '',
		//     location: 'Chicago',
		//     guest_list: [],
		//     message: body,
		//     img_url: ''
		//   };

		//   // Get a key for a new Post.
		//   var newEventKey = firebase.database().ref().child('events').push().key;

		//   // Write the new Event's data simultaneously in the Events list and the user's Event list.
		//   var updates = {};
		//   updates['/events/' + newEventKey] = eventData;
		//   updates['/user-events/' + uid + '/' + newEventKey] = eventData;

		//   return firebase.database().ref().update(updates);
		// }

	}]);
