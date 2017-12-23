(function () {
	
	//vamos criar a variavel que representa nosso app
	var app = angular.module("MyApp",["ngAnimate"]);

	//vamos criar nossas controllers
	app.controller("MainCtrl",["$scope",function($scope) {
		
		//inserimos nossas models
		$scope.visible = false;
		$scope.labelInput = "On";
		$scope.itens = [];
		$scope.item = {}

		//nosso método que inverte os valor
		$scope.onOff = function () {
			$scope.visible = !$scope.visible;

			if($scope.visible){
				$scope.labelInput = "Off";
			}else{
				$scope.labelInput = "On";
			}

		}

		$scope.addItem = function (item) {
		
			$scope.itens.push(angular.copy(item));
			$scope.item = {};

		}

		$scope.removeItem = function(index){
			/*
				remove a quantidade de itens passada a partir do indice passado
				sendo assim remove 1 a partir do indice recebido
			*/
			$scope.itens.splice(index, 1);
		}

	}])

})()