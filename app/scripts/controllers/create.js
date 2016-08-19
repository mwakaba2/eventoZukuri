'use strict';

angular
	.module('eventoZukuri')
	.controller('CreateCtrl', ['$scope', '$firebaseObject', '$state', function ($scope, $firebaseObject, $state) {
		$scope.currUser = firebase.auth().currentUser;
		$scope.startDate = getDate();
		$scope.endDate = getDate();
		$scope.startTime = $scope.startDate;
		$scope.endTime = $scope.endDate;
		$scope.guests = [];
		var userId;

		if($scope.currUser) {
			userId = $scope.currUser.uid;
			firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				$scope.name = snapshot.val().name;
			});
		}

		$scope.addGuest = function() {
			$scope.guests.push($scope.guest);
			$scope.guest = '';
		};

		$scope.submitEvent = function() {
			var eventKey = writeNewEvent(userId);
			$state.go('home.events.event_selected', { 'event_id': eventKey });
		};

		function getDate() {
			var newDate = new Date();
			newDate.setMilliseconds(0);
			newDate.setSeconds(0);
			return newDate;
		}

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
				guest_list: $scope.guests,
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
