threesApp.factory('keyEvents', function(boardEvents){
	return {
		chooseCompileDirection: function(keyCode, board) {
			
			switch(keyCode) {
				case 37: //compileLeft
					console.log("left)")
					boardEvents.compileLeft(board);
					break;
            	case 38: //up
            		console.log("up")
            		break;         		
            	case 39: //right
            		console.log("right")
            		boardEvents.compileRight(board);
            		break;
            	case 40: //down
            		console.log("down")
            		break;
            		
			}
		}
	}
});