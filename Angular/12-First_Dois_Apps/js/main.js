//Criamos o nosso modulo do angular
var myApp = angular.module("app",[]);

//agora nós vamos adicionar uma controller para o módulo
myApp.controller("GreetingController",['$scope',function($scope) {
	//então eu vou atribuir um valor inicial para uma propriedade do meu escopo
	$scope.greeting = "Seja Bem Vindo Angular.JS!";
	$scope.tchau = "Adeus e Seja Feliz!";

	//associamos a propriedade uma função
	$scope.showAlert = function(){
		//esta função será chamada quando o objeto da view for pressionado
		console.log(event);//estamos imprimindo o objeto de evento enviado pelo listener 
		alert("Meu alerta divertido");//enviamos um alerta 

		//Alteramos um dos objetos de escopo que criamos anteriormente
		$scope.greeting = "Agora SIM!";
		$scope.tchau = "Sou Feliz!";
	}

}]);



//Criamos o nosso modulo do angular
var mySecond = angular.module("secondApp",[]);

//agora nós vamos adicionar uma controller para o módulo
mySecond.controller("GreetingController",['$scope',function($scope) {
	//então eu vou atribuir um valor inicial para uma propriedade do meu escopo
	$scope.greeting = "Segundo BEM VINDO!";
	$scope.tchau = "Feliz!";

	//associamos a propriedade uma função
	$scope.showAlert = function(){
		//esta função será chamada quando o objeto da view for pressionado
		console.log(event);//estamos imprimindo o objeto de evento enviado pelo listener 
		alert("divertido 2");//enviamos um alerta 

		//Alteramos um dos objetos de escopo que criamos anteriormente
		$scope.greeting = "Agora 2 SIM!";
		$scope.tchau = "Sou 2 Feliz!";

		console.log(myApp);
	}

}]);


//é o método do angular que pode ser associado a finalização de carregamento
angular.element(document).ready(function() {
	//informando que o angular está pronto para manipular os elementos do document
	console.log("Carregado");

	//pegar o elemento do DOM
  	var myDiv1 = document.getElementById("app");
  	//nós criamos o link entre o elemento e o módulo que nós vamos utilizar
  	angular.bootstrap(myDiv1, ["app"]);

  	var myDiv2 = document.getElementById("secondApp");
  	angular.bootstrap(myDiv2, ["secondApp"]);
});

