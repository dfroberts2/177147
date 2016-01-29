threesApp.factory('boardEvents',function(){
	return {
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
		},
		compileLeft: function(board){
			console.log("lefty loosy")
		}
	}
});