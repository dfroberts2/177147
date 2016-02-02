threesApp.factory('boardEvents',function(){
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
				row = shiftRowLeft(row);
				row.forEach(function(cell, cellNumber) {
					if (cell == row[cellNumber+1] && cell != null) {
						row[cellNumber] = Math.pow(cell, 2);
						row[cellNumber+1] = null;
					}
				});
				board.values[rowNumber] = shiftRowLeft(row);
			}); 
		},

		compileRight: function(board){
			reverseRows(board);
			boardEventsFunctions.compileLeft(board);
			reverseRows(board);
		}
	};

	return boardEventsFunctions

	function reverseRows(board) {
		board.values.forEach(function(row, rowNumber){
				row.reverse();
				board.values[rowNumber] = row;
			});
	}

	function shiftRowLeft(row){
		row = row.filter(function(cell){
			return cell != null
		});
		var padLength = 4 - row.length;
		for(var i = 0; i < padLength; i++){
			row.push(null);
		}
		return row
	}
});