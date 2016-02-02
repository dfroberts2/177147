threesApp.factory('boardMethods',function(){
	var boardMethodsFunctions = {
		flattenBoard: function(board) {
			return board.values.reduce(function(a, b){ 
				return a.concat(b)
			});
		},

		calculateScore: function(board) {
			var scorableCells = board.flattenBoard().filter(function(cell) {
				return cell != 3 && cell != null
			});
			if (scorableCells.length) {
				return scorableCells.reduce(function(a, b){
					return a + b
				})
			}
		},

		reverseRows: function(board) {
		board.values.forEach(function(row, rowNumber){
				row.reverse();
				board.values[rowNumber] = row;
			});
		},

		shiftRowLeft: function(row) {
			row = row.filter(function(cell){
				return cell != null
			});
			var padLength = 4 - row.length;
			for(var i = 0; i < padLength; i++){
				row.push(null);
			}
			return row
		},

		rotateBoard: function(board) {
			board.values = (_.zip.apply(_, board.values));
			boardMethodsFunctions.reverseRows(board)
		},

		checkGameOver: function(board) {
			if(!_.contains(board.flattenBoard(), null)) {
				if (boardMethodsFunctions.checkRightCell(board) || boardMethodsFunctions.checkRightRotated(board)) {
					boardMethodsFunctions.fixRotatedBoard(board)
					return false;
				}
				else {
					boardMethodsFunctions.fixRotatedBoard(board);
					return true;
				}
			}
			else {
				return false;
			}
		},

		checkRightCell: function(board) {
			for (var i=0; i < board.values.length; i++) {
				var row = board.values[i]
				for (j=0; j < row.length; j++) {
					var cell = row[j]
					if (cell == row[j+1]) {
						return true;
						break;
					}
				};
			};
		},

		checkRightRotated: function(board) {
			boardMethodsFunctions.rotateBoard(board)
			return boardMethodsFunctions.checkRightCell(board)
		},

		fixRotatedBoard: function(board) {
			boardMethodsFunctions.rotateBoard(board)
			boardMethodsFunctions.rotateBoard(board)
			boardMethodsFunctions.rotateBoard(board)
		}

	}
	return boardMethodsFunctions
});