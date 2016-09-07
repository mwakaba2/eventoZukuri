'use strict';

angular
	.module('eventoZukuri')
	.controller('CreateCtrl', function ($scope, $state, AuthService) {
		$scope.$watch( AuthService.isLoggedIn, function (isLoggedIn) {
			$scope.isLoggedIn = isLoggedIn;
			$scope.currentUser = AuthService.currentUser();
			$scope.userId = AuthService.userId();
			if($scope.isLoggedIn) {
				$scope.currentUser.then(function(data) {
					var userInfo = data.val();
					$scope.userName = userInfo.name;
					$scope.$apply();
				});
			}
		});
		$scope.currentDate = getDate();
		$scope.startTime = getDate();
		$scope.endTime = getDate();
		$scope.guests = [];
		$scope.noGuests = true;
		$scope.types = [
			{value: 'Award Ceremony' , name: 'Award Ceremony'},
			{value: 'Birthday', name: 'Birthday'},
			{value: 'Business Dinner', name: 'Business Dinner'},
			{value: 'Conference', name: 'Conference'},
			{value: 'Family Event', name: 'Family Event'},
			{value: 'Golf Event', name: 'Golf Gvent'},
			{value: 'Meeting', name: 'Meeting'},
			{value: 'Opening Ceremony', name: 'Opening Ceremony'},
			{value: 'Press Conference', name: 'Press Conference'},
			{value: 'Product Launch', name: 'Product Launch'},
			{value: 'Seminar', name: 'Seminar'},
			{value: 'Team Building Event', name: 'Team Building Event'},
			{value: 'Trade Fair', name: 'Trade Fair'},
			{value: 'Trade Show', name: 'Trade Show'},
			{value: 'Networking Event', name: 'Networking Event'},
			{value: 'Vip Event', name: 'Vip Event'},
			{value: 'Wedding', name: 'Wedding'},
			{value: 'Wedding Anniversary', name: 'Wedding Anniversary'}
		];
		$scope.selectedType = null;

		$scope.addGuest = function() {
			if($scope.guest) {
				$scope.noGuests = false;
				$scope.guests.push($scope.guest);
				$scope.guest = '';
			}
		};

		$scope.submitEvent = function() {
			if($scope.guests.length > 0) {
				var eventKey = writeNewEvent($scope.userId);
				$state.go('home.events.event_selected', { 'event_id': eventKey });
			} else {
				$scope.noGuests = true;
			}
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
				author: $scope.userName,
				uid: uid,
				title: $scope.title,
				type: $scope.selectedType.value,
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
	});
