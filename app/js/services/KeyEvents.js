threesApp.factory('keyEvents', function(boardEvents){
	return {
		chooseCompileDirection: function(keyCode) {
			
			switch(keyCode) {
				case 37: //left
					boardEvents.compileLeft();
					break;
            	case 38: //up
            		return 'compile up';
            		break;
            	case 39: //right
            		return 'compile right';
            		break;
            	case 40: //down
            		return 'compile down';
            		break
			}
		}
	}
});