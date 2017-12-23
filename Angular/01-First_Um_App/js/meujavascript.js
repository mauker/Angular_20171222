//Criamos o nosso modulo do angular
var myApp = angular.module('app',[]);

//agora nós vamos adicionar uma controller para o módulo
myApp.controller('GreetingController', ['$scope',function($scope) {

	//O SCOPE (Model) representa um elo entre a view e a controller
	$scope.greeting = 'Jonas';
	$scope.aula = "World!";	

	$scope.showAlert = function(){
		console.log(event);
		alert("Meu alerta divertido");
		$scope.greeting = 'Olá';
		$scope.aula = "Renato!";
	}
}]);


