(function(){
	angular.module("app")
	.controller('TaskFormController', function(DataFactory){


		var vm = this;
		vm.list = DataFactory.getData() || [];
		vm.addList = function (){
			console.log(vm.newItem)
			vm.list.push(vm.newItem);
			
			vm.newItem ="";
		}


		DataFactory.setData(vm.list);
		vm.remove= function(index){
			vm.list.splice(index,1);
		}






	});

})();