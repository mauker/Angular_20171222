//criamos nosso app
var app = angular.module("mainApp",[]);


//adicionamos a controller no app
app.controller("CartController",["$scope","$http",CartControllerFN]);


//é a definição
function CartControllerFN($scope, $http) {
	//definir os nosso objetos que serão compartilhados pela view
	$scope.conta = {};//instanciando um objeto vazio
	//criamos uma lista de itens que serão comprados
	$scope.items = [
		{name:"Chocolate",price:1.99, quantity:10},
		{name:"Farinha",price:2.00, quantity:2},
		{name:"Manteiga",price:5.45, quantity:10}
	]
	//criamos um método que calcula o valor da compra com base nos itens
	function updateValue() {
	
		//guarda o valor total
		var total = 0;
	
		//para cara item adicionamos o preço total da compra
		$scope.items.forEach(function(item,lista,index) {
			console.log(arguments);//todos os parametros enviados por quem chamou o método
			console.log(item, lista, index);//apenas o console para observar os valores
			total += item.price * item.quantity;
		});

		//definimos os valores da conta
		$scope.conta.total = total;
		$scope.conta.discount = total > 100 ? 10 : 0;
		$scope.conta.subtotal = total - $scope.conta.discount;
	}

	//cadastramos o watcher
	/*
		no terceiro agumento informamos a profundidade de analise
		
		- false (analisa superficialmente a variavel, executa o metodo apenas se a variavel for radicalmente alterada, por exemplo caso você associe uma outra instancia para variavel)

		- true (analisa profundamente o conteúdo da variavel, e qualquer modificação resultara na chamada do método associado)
	*/
	$scope.$watch("items",updateValue, v8.DefaultSerializer(););
	

	//adiciona item
	$scope.addItem = function () {
		$scope.items.push({name:"Ovos",price:55.45, quantity:10});
	}	

	//altera item
	$scope.updateItem = function () {
		$scope.items[$scope.items.length-1].quantity = 1
	}

	//remove item
	$scope.removeItem = function () {
		//remove apenas o último item do array e retorna este item para quem o solicitou
		return $scope.items.pop()
	}

	//troca os itens
	$scope.changeItems = function () {
		//neste código nós trocamos a lista inteira de conteúdo, enviando uma nova lista
		$scope.items = [
			{name:"Maça",price:1, quantity:12},
			{name:"Laranja",price:2, quantity:13},
		]
	}	



}


