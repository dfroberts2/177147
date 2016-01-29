threesApp.factory('keyEvents', function(boardEvents){
	return {
		chooseCompileDirection: function(keyCode, board) {
			
			switch(keyCode) {
				case 37: //compileLeft
					boardEvents.compileLeft(board);

            	case 38: //up
            		
            		
            	case 39: //right
            		
            		
            	case 40: //down
            		
            		
			}
		}
	}
});