angular.module('eventoZukuri')
	.controller('RegisterCtrl', function ($state, $scope) {
		'use strict';

		$scope.signUp = function () {
			firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.pass1).then(function(user) {
				saveUser(user.uid);
				$state.go('home.events');
			}).catch(function(error) {
				// Handle Errors here.
				$scope.errorMessage = error.message;
			});
		};

		function saveUser(userId) {
			$scope.employer = $scope.employer === undefined ? '' : $scope.employer;
			$scope.jobTitle = $scope.jobTitle === undefined ? '' : $scope.jobTitle;
			$scope.bday = $scope.bday === undefined ? '' : $scope.bday;

			firebase.database().ref('users/' + userId).set({
				name: $scope.name,
				email: $scope.email,
				employer: $scope.employer,
				jobTitle: $scope.jobTitle,
				bday: $scope.bday
			});
		}

	});

