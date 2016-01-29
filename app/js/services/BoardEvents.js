threesApp.factory('boardEvents',function(){
	return {
		generateNumber: function(board) {
			var random = Math.floor(Math.random() * 16)
			while (!board.flattenBoard[random]) {
				var col = random % 4
				var row = Math.floor(random / 4	)
				board.values[row][col] = 3
				random = Math.floor(Math.random() * 16)
				break;
			}
		}
	}
});