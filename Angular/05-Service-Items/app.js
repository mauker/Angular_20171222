(function () {
	
	var app = angular.module("App",[]);

	app.controller("WannaBuy",["$scope","WebItems",function($scope,webItemsFN) {
		//Nós estamos associando nossos itens ao retorno dos itens que são gerênciados pela factory
		$scope.items = webItemsFN.get();

	}])

	app.controller("AddItemCtrl",["$scope","WebItems",function($scope,webItemsFN) {
		
		$scope.item = {}

		$scope.addItem = function (item) {
		
			webItemsFN.set(item);
			$scope.item = {};

		}
	}])

	

})()