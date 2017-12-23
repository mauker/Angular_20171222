(function () {
	
	//declaramos nosso modulo
	var app = angular.module("broadApp",[]);

	//definir nossas controllers
	function SendCtrl($scope, $rootScope){
		$scope.texto = "";
		$scope.sendText = function(event) {
			//estamos enviando um evento customizado chamado SendMessage, com o texto que está no escopo
			$rootScope.$broadcast("SendMessageEvent",{texto: $scope.texto});
		}

		//estamos agora cadastrando o listener para receber os dados
 		$scope.$on("SendMessageEvent", function (event, data) {
 				
 			console.log("Recebido no Send ", data);
 		})
	}
 	function ReaderCtrl($scope){
 		//vamos declarar as models
 		$scope.content = ""

 		//estamos agora cadastrando o listener para receber os dados
 		$scope.$on("SendMessageEvent", function (event, data) {
 			
 			$scope.content = data.texto;
 			console.log("Recebido no Reader ", data);
 		})
		
	}

	//cadastrando as controllers no modulo
	app.controller("SendCtrl",["$scope", "$rootScope", SendCtrl])
	app.controller("ReaderCtrl",["$scope", ReaderCtrl])


})()