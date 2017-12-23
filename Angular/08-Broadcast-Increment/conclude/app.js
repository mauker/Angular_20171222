(function(){

//nós instanciamos o nosso app
var app = angular.module("customServiceApp", []);


//vamos instanciar nossas controllers
app.controller("Secao1Ctrl", ["$scope","$rootScope", function ($scope, $rootScope) {
	
	$scope.total = 0

	$scope.incrementarValorTotalEm = function (valor) {
		
		//envio via broadcast
		$rootScope.$broadcast("IncrementMessage", {newValue: valor})

	}

	//para ouvir os eventos que ocorrem
	$scope.$on("IncrementMessage", function (event, data) {
		$scope.total += data.newValue;
	})

}])

app.controller("Secao2Ctrl", ["$scope", function ($scope) {

	$scope.total = 0

	//para ouvir os eventos que ocorrem
	$scope.$on("IncrementMessage", function (event, data) {
		$scope.total += data.newValue;
	})
	

	
}])

})()