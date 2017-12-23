//primeira faze é instanciar o modulo do angular
var app = angular.module("app",[]);

//então vamos criar uma controller para este modulo
app.controller("ViewController", ["$scope", function($scope) {
	
	$scope.text = "Meu texto predileto que esta sendo lido pelo Angular gostosinho!";
}])