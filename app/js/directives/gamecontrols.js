threesApp.directive('gameControls', function(boardMethods){
	return {
		restrict: 'A',
		link: function($scope, element, attrs, controller) {
			jQuery(document).on('keydown', function(event){
			switch(event.keyCode) {
	            case 37: //left
	            	console.log("left!")
	            case 38: //up
	            case 39: //right
	            case 40: //down
			})
		}
	}

})