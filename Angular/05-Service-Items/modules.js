(function () {
	
	//vamos criar nossa factory
	angular.module("App")
	.factory("WebItems",function(){

		//privado 
		var items = [];

		//criar os métodos
		function getItems() {
			return items
		}
		function addItem(item) {
			items.push(item);
		}

		//objeto de retorno da factory, é este objeto que nós utilizaremos dentro das controllers
		return {
			get:getItems,
			set:addItem
		}
	})

})()