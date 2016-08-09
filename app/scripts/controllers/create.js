'use strict';

angular
	.module('eventoZukuri')
	.controller('CreateCtrl', ['$scope', '$firebaseObject', '$state', function ($scope, $firebaseObject, $state) {
		$scope.currUser = firebase.auth().currentUser;
		$scope.startDate = new Date();
		$scope.startDate.setMilliseconds(0);
		$scope.endDate = new Date();
		$scope.endDate.setMilliseconds(0);
		$scope.startTime = $scope.startDate;
		$scope.endTime = $scope.endDate;
		var userId;

		if($scope.currUser) {
			var userId = $scope.currUser.uid;
			firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				$scope.name = snapshot.val().name;
			});
		} else {
			console.log('User is logged out.');
		}

		this.submitEvent = function() {
			var eventKey = writeNewEvent(userId);
			$state.go('home.events.event_selected', { 'event_id': eventKey });
		};

		function writeNewEvent(uid) {
			// A post entry.
			var eventData = {
				author: $scope.name,
				uid: uid,
				title: $scope.title,
				type: $scope.type,
				host: $scope.host,
				start_time: $scope.startTime,
				end_time: $scope.endTime,
				location: $scope.location,
				guest_list: [],
				message: $scope.message || '',
			};

			// Get a key for a new Post.
			var newEventKey = firebase.database().ref().child('events').push().key;
			eventData.eventKey = newEventKey;
			// Write the new Event's data simultaneously in the Events list and the user's Event list.
			var updates = {};
			updates['/events/' + newEventKey] = eventData;
			updates['/user-events/' + uid + '/' + newEventKey] = eventData;

			firebase.database().ref().update(updates);
			return newEventKey;
		}
	}]);
