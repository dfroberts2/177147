'use strict';

threesApp.controller('BoardController',
	function BoardController($scope, $document, boardEvents, boardMethods, keyEvents){
	$scope.board = {
		values: [[null, null, null, null],
				 [null, null, null, null],
				 [null, null, null, null],
				 [null, null, null, null]],
		// values: [[1, 2, 3, 4],
		// 		 [1, 6, 7, 8],
		// 		 [9, 10, 11, 12],
		// 		 [13, 14, 15, 16]],


		
		score: function(){

			return boardMethods.calculateScore(this);
		},

		flattenBoard: function() {
			return boardMethods.flattenBoard(this);
		}
	};

	$scope.startGame = function() {
		boardEvents.generateNumber($scope.board)
		boardEvents.generateNumber($scope.board)
		this.showStartButton = false
	};

	$scope.setCellClass = function(cellValue) {
		if (cellValue == null) {
			return "inactive"
		}
		else {
			return "filled"
		}
	}

	$document.on('keydown', function(event) {
		var origValues = $scope.board.flattenBoard();
		keyEvents.chooseCompileDirection(event.keyCode, $scope.board)
		if (!_.isEqual($scope.board.flattenBoard(), origValues)) {
			boardEvents.generateNumber($scope.board)
		}
		if (boardMethods.checkGameOver($scope.board)) {
			console.log("gameover")
		}
		$scope.$apply();
	});

	// $scope.$on('$destroy', function () {
 //    	$document.off('keyup',


});