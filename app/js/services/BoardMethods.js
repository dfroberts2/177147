threesApp.factory('boardMethods',function(){
	return {
		flattenBoard: function(board) {
			return board.values.reduce(function(a, b){ 
				return a.concat(b)
			});
		},

		calculateScore: function(board) {
			console.log("Score")
		}
	}
});