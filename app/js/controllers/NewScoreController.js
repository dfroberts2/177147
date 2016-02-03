'use strict';

threesApp.controller('NewScoreController',
	function NewScoreController($scope, $routeParams) {
		$scope.newScore = $routeParams.score
	}
);