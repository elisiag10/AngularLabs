(function(){
	angular.module('app', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/', {
					template: '<welcome></welcome>'
				})
				.when('/app', {
					template: "<task-form></tasks-form>"
				})
			


				// $locationProvider.html5Mode(true);
		});
	})();



