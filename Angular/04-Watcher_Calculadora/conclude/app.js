(function(){ //self called

	//trazemos o modulo do angular a vida
	var app	= angular.module("calcApp",[]);	
	
	//cadastramos a nossa controller, ou instanciamos ela

	app.controller("CalcCtrl",["$scope",CalcCtrlFN])

	//criamos nossa função construtora do controller
	function CalcCtrlFN($scope) {
		
		//vou declarar todas as variaveis de escopo
		$scope.preco = 0;
		$scope.desconto = 0;
		$scope.valorFinal = 0;
		$scope.isWatching = false;
		
		var watcherPreco, watcherDesconto;
		
		$scope.iniciarWatch = function () {
			
			watcherPreco 	= $scope.$watch("preco", updateValues)
			watcherDesconto = $scope.$watch("desconto", updateValues)
				
			$scope.isWatching = true
		}
		
		$scope.encerrarWatch = function () {
			$scope.isWatching = false

			watcherPreco()
			watcherDesconto()
		}

		function updateValues(){
			$scope.valorFinal = $scope.preco - ($scope.preco * ($scope.desconto / 100))
		}


	}


})()