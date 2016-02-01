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
				shiftLeft(row, rowNumber, board)
				// row.forEach(function(cell,index){
					
	
				// });
			}); 
		}
	}

	function shiftLeft(row, rowNumber, board){
		var rowClone = row.slice(0);
		rowClone.forEach(function(cell, cellNumber){
			if (cell == null){
				board.values[rowNumber].push(board.values[rowNumber].splice(cellNumber, 1)[0]);
			}
		})
	}
});