threesApp.factory('boardEvents',function(boardMethods){
	var boardEventsFunctions = {
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
			board.values.forEach(function(row, rowNumber){
				row = boardMethods.shiftRowLeft(row);
				row.forEach(function(cell, cellNumber) {
					if (cell == row[cellNumber+1] && cell != null) {
						row[cellNumber] = Math.pow(cell, 2);
						row[cellNumber+1] = null;
					}
				});
				board.values[rowNumber] = boardMethods.shiftRowLeft(row);
			}); 
		},

		compileRight: function(board){
			boardMethods.reverseRows(board);
			boardEventsFunctions.compileLeft(board);
			boardMethods.reverseRows(board);
		}
	};

	return boardEventsFunctions

});