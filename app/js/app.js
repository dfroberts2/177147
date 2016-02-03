'use strict';

var threesApp = angular.module('threesApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/game',
			{
				templateUrl: 'templates/game.html',
				controller: 'BoardController'
			});

		$routeProvider.when('/scores/new',
			{
				templateUrl: 'templates/newScore.html',
				controller: 'NewScoreController'
			});
		$routeProvider.otherwise({redirectTo: '/game'});
	});