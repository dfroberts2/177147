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
		}

	}
	return boardMethodsFunctions
});