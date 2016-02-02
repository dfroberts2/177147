threesApp.factory('keyEvents', function(boardEvents){
	return {
		chooseCompileDirection: function(keyCode, board) {
			
			switch(keyCode) {
				case 37: //compileLeft
					boardEvents.compileLeft(board);
					break;
            	case 38: //compileUp
            		boardEvents.compileUp(board);
            		break;         		
            	case 39: //compileRight
            		boardEvents.compileRight(board);
            		break;
            	case 40: //compileDown
            		boardEvents.compileDown(board);
            		break;
            		
			}
		}
	}
});