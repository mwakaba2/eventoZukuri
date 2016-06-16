'use strict';

angular.module('eventoZukuri', ['firebase', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'login/login-view.html',
				controller: 'login/login-ctrl.js'
			});
	}]);
