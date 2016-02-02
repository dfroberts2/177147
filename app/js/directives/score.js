'use strict';

threesApp.directive('score', function(){
	return {
		restrict: 'E',
		replace: true,
		template: '<h3>Score: {{score}}</h3>',
		scope: {
			score: '@'
		}
	}
})