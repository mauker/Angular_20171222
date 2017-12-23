(function () {
	
	//vamos então criar nosso modulo
	var app = angular.module("routingApp",['ngRoute'])

	//vamos agora configurar o routeProvider
	.config(["$routeProvider", function($routeProvider) {
	
		//nós vamos definir as rotas da nossa aplicação
		$routeProvider.
			when("/pagina1",{
				templateUrl:'partials/pagina1.html',
				controller:'Page1Ctrl'
			}).
			when("/pagina1/:nome",{
				templateUrl:'partials/pagina1.html',
				controller:'Page1Ctrl'
			}).
			when("/pagina2",{
				templateUrl:'partials/pagina2.html',
				controller:'Page2Ctrl'
			}).
			when("/pagina2/:nome/:email",{
				templateUrl:'partials/pagina2.html',
				controller:'Page2Ctrl'
			}).
			when("/pagina3",{
				templateUrl:'partials/pagina3.html',
				controller:'Page1Ctrl'
			}).
			otherwise("/pagina1");
			
	}])

	//precisamos criar nossos controllers
	app.controller("Page1Ctrl",["$scope", "$routeParams",function ($scope,$routeParams) {
		$scope.nome = $routeParams.nome;
	}])
	app.controller("Page2Ctrl",["$scope","$routeParams",function ($scope,$routeParams) {
		
		$scope.nome = $routeParams.nome;
		$scope.email = $routeParams.email;

	}])


})()