(function () {
	
	//meu app
	var app = angular.module("customServiceApp", []);

	//vamos criar nossa factory
	app.factory("Message", function () {
		
		var mensagem = ""

		function pegarMensagemFN() {
			return mensagem
		}
		function setarMensagemFN(_mensagem) {
			mensagem = _mensagem
		}

		return {
			pegarMensagem: pegarMensagemFN,
			setarMensagem: setarMensagemFN
		}
	})	

	//definindo as controllers
	app.controller("Secao1Ctrl", ["$scope","Message", BaseController]);
	app.controller("Secao2Ctrl", ["$scope","Message", BaseController]);

	function BaseController($scope, Message) {
		$scope.pegarMensagem = Message.pegarMensagem
	}

	app.controller("ServicoSetterCtrl", ["$scope","Message", function ($scope, Message) {
		
		$scope.novaMensagem = ""

		$scope.setarMensagem = function() {
			console.log("Ação de envio");
			Message.setarMensagem($scope.novaMensagem);	
		}

	}])

})()