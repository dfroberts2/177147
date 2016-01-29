'use strict';

threesApp.controller('BoardController',
	function BoardController($scope, $document, boardEvents, boardMethods, keyEvents){
	$scope.board = {
		score : 0,
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
		boardEvents.generateNumber($scope.board)
		$scope.showStartButton = false
	};

	$document.on('keydown', function(event){
		keyEvents.chooseCompileDirection(event.keyCode, $scope.board)
	});

	// $scope.$on('$destroy', function () {
 //    	$document.off('keyup',
});