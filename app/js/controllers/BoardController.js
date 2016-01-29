'use strict';

threesApp.controller('BoardController',
	function BoardController($scope, boardEvents){
	$scope.board={
		rowOne: [undefined, undefined, undefined, undefined],
		rowTwo: [undefined, undefined, undefined, undefined],
		rowThree: [undefined, undefined, undefined, undefined],
		rowFour: [undefined, undefined, undefined, undefined]
	},
	$scope.startGame = function() {
		boardEvents.generateNumber($scope.board)
	}
});