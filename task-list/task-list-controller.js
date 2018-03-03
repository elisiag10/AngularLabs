(function(){
	angular.module('app')
	.controller('TaskListController', function(){
		var vm = this;

		vm.remove = function (index){
			vm.list.splice(index, 1);
		};
	})
})();