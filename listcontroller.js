(function(){

	angular
		.module('app')
		.controller('TestController', TestController)


	function TestController(){
		var vm = this;
		vm.list = [];
		vm.addList = function (){
			vm.list.push(vm.newItem);
			vm.newItem ="";
		}
		
		vm.remove= function(index){
			vm.list.splice(index,1);
		}

	

	

	};





})();

