'use strict';

angular
	.module('eventoZukuri')
	.controller('HomeCtrl', function ($scope, $state, AuthService) {
		$scope.$state = $state;
		$scope.$watch( AuthService.isLoggedIn, function (isLoggedIn) {
			$scope.isLoggedIn = isLoggedIn;
			$scope.currentUser = AuthService.currentUser();
			if($scope.isLoggedIn) {
				$scope.currentUser.then(function(data) {
					var userInfo = data.val();
					$scope.userName = userInfo.name;
					$scope.$apply();
				});
			}
		});

		$scope.logout = function() {
			AuthService.logout().then(function() {
				// Sign-out successful.
				if($state.is('home.events.create_event')) {
					$state.go('home.events');
				} else {
					$scope.$apply();
				}
			});
		};
	});
