threesApp.factory('boardEvents',function(){
	return {
		compileLeft: function(board){
			board.values[3][3] = 5000;
			console.log(board)
		},
		generateNumber: function(board) {
			var random = Math.floor(Math.random() * 16);
			if (!board.flattenBoard()[random]) {
				var col = random % 4;
				var row = Math.floor(random / 4	);
				board.values[row][col] = 3;
			}else if (!_.contains(board.flattenBoard(), null)) {
				console.log('Gameover')
			} else {
				this.generateNumber(board);
			}
		};

	}
});