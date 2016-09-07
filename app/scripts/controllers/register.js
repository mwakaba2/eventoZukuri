angular.module('eventoZukuri')
	.controller('RegisterCtrl', function ($state, $scope, AuthService) {
		'use strict';
		$scope.signUp = function() {
			AuthService.signup($scope.email, $scope.pass1).then(function() {
				saveUser();
				$state.go('home.events');
			}).catch(function(error) {
					// Handle Errors here.
					$scope.errorMessage = error.message;
			});
		};

		function saveUser() {
			$scope.employer = $scope.employer === undefined ? '' : $scope.employer;
			$scope.jobTitle = $scope.jobTitle === undefined ? '' : $scope.jobTitle;
			$scope.bday = $scope.bday === undefined ? '' : $scope.bday;

			firebase.database().ref('users/' + AuthService.userId()).set({
				name: $scope.name,
				email: $scope.email,
				employer: $scope.employer,
				jobTitle: $scope.jobTitle,
				bday: $scope.bday
			});
		}

	});

