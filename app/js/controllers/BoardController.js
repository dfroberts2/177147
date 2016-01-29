'use strict';

threesApp.controller('BoardController',
	function BoardController($scope, boardEvents, boardMethods){
	$scope.board={
		values: [[null, null, null, null],
				 [null, null, null, null],
				 [null, null, null, null],
				 [null, null, null, null]],

		flattenBoard: function(){
			return boardMethods.flattenBoard(this)
		}
	};

	$scope.startGame = function() {
		boardEvents.generateNumber($scope.board)
	}
});