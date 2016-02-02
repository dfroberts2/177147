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
		this.showStartButton = false
	};

	$document.on('keydown', function(event){
		var origValues = $scope.board.flattenBoard();
		keyEvents.chooseCompileDirection(event.keyCode, $scope.board)
		if (!_.isEqual($scope.board.flattenBoard(), origValues)) {
			boardEvents.generateNumber($scope.board)
		}
		else{
			console.log("no change")
		}
		$scope.$apply();
	});

	// $scope.$on('$destroy', function () {
 //    	$document.off('keyup',


});