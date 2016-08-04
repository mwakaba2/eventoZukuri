angular
	.module('eventoZukuri')
	.controller('EventsCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
		$scope.currUser = firebase.auth().currentUser;
		var recentEventsRef = firebase.database().ref('events');
		// $scope.events = $firebaseArray(recentEventsRef);
		// $scope.events.$loaded()
		// .then(function(data){
		// 	$scope.events = data;
		// });
		firebase.database().ref('/events').once('value').then(function(snapshot) {
				$scope.events = snapshot.val();
				console.log($scope.events);
				// writeNewEvent(userId, $scope.name, "Hello Chicago", "This is a cool event");
		});
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
