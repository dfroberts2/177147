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
			board.values.forEach(function(row, rowNumber){
				row = shiftLeft(row, rowNumber, board)
				// row.forEach(function)
			}); 
			board.values[rowNumber] = row
		}
	}

	function shiftLeft(row, rowNumber, board){
		row = row.filter(function(cell){
			return cell != null
		});
		var nullLength = 4 - row.length;
		for(var i = 0; i < nullLength; i++){
			row.push(null);
		}
		return row
	}
});