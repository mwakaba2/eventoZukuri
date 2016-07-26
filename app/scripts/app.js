'use strict';

angular
	.module('eventoZukuri', ['firebase', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl as home'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl as login'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'views/register.html',
				controller: 'RegisterCtrl as register'
			})
			.state('create', {
				url: '/create',
				templateUrl: 'views/create.html',
				controller: 'CreateCtrl as create'
			});
	}]);
