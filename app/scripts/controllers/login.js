'use strict';

angular
	.module('eventoZukuri')
	.controller('LoginCtrl', function ($state, $scope, AuthService) {
		$scope.logIn= function() {
			AuthService.login($scope.email, $scope.password).then(function() {
				$state.go('home.events');
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				$scope.errorMessage = error.message;
			});
		};
	});
