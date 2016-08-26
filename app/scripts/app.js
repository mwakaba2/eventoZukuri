'use strict';

angular
	.module('eventoZukuri', ['firebase', 'ui.router', 'ngSanitize'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				abstract: true,
				views : {
					'': {
						templateUrl: 'views/home.html',
						controller: 'HomeCtrl as home',
					},
				}
			})
			.state('home.events', {
				url: '',
				views: {
					'main@home': {
						templateUrl: 'views/events/events.html',
						controller: 'EventsCtrl as events',
					}
				}
			})
			.state('home.events.event_selected', {
				url: 'events/:event_id',
				views: {
					'main@home': {
						templateUrl: 'views/events/event-detail.html',
						controller: 'EventDetailsCtrl as eventDetails',
					}
				}
			})
			.state('home.events.create_event', {
				url: 'new',
				views: {
					'main@home': {
						templateUrl: 'views/events/create.html',
						controller: 'CreateCtrl as create',
					}
				}
			})
			.state('home.login', {
				url: 'login',
				views: {
					'main@home': {
						templateUrl: 'views/login.html',
						controller: 'LoginCtrl as login',
					}
				}
			})
			.state('home.register', {
				url: 'register',
				views: {
					'main@home': {
						templateUrl: 'views/register.html',
						controller: 'RegisterCtrl as register',
					}
				}
			});
	}]);
