(function () {
	//criamos nosso app
	var app = angular.module("app",[]);
	//vamos criar nossa controller para o envio do dado no rest
	app.controller("FormCtrl",["$scope","RestAPI",function ($scope, RestAPI) {
		//vamos definir nossas variaveis globais
		$scope.user = {nome:"Mauricio", idade:"anos", profissao:"Jonas", cursando:"Jobson"};
		//nossos métodos
		$scope.search = function (user) {
			//neste método receberemos o user do form
			console.log(user);
			RestAPI.getAlunoByQuery(user);
		}

		$scope.insert = function(user) {
			console.log(user);

			if(user._id){

				RestAPI.updateAluno(user, function (result) {
					console.log("Status do Insert ->", result)
					if(result.data.errors != undefined){
						alert(result.data.message)
						return;
					}
					RestAPI.getAlunoByQuery();		
				})


			}else{

				RestAPI.insertAluno(user, function (result) {
					console.log("Status do Insert ->", result)
					if(result.data.errors != undefined){
						alert(result.data.message)
						return;
					}
					RestAPI.getAlunoByQuery();		
				})

			}
		}

		$scope.newAluno = function(user) {
			
				$scope.user = {}

		}

		$scope.$on("EditUser",function(event, user){
			$scope.user = user;
		})

		RestAPI.getAlunoByQuery();

	}])
	//controller do result
	app.controller('ResultCtrl', ['$scope',"RestAPI", '$rootScope', function($scope, RestAPI, $rootScope){
		
		$scope.$on("SearchAluno",function(event, data) {
			console.log("Recebeu", data);
			$scope.funcionarios = data.data;
		});

		$scope.editar = function(user) {
			$rootScope.$broadcast("EditUser",user);
		}

		$scope.delete = function(user) {

			RestAPI.deleteAluno(user, function (result) {
				console.log("Status do Insert ->", result)
				if(result.data.errors != undefined){
					alert(result.data.message)
					return;
				}
				RestAPI.getAlunoByQuery();		
			})
		}
	}])

	//vamos criar a factory
	app.factory('RestAPI', ['$rootScope','$http', function($rootScope,$http){
		
		var endURL = "http://192.168.10.208:3000/api/alunos";


		function getAlunoByQuery(query) {
			console.log(query);
			$http
			    .get(endURL, {
			        params: query
			     })
			     .then(function (data) {
			     	  console.log(data);
			          $rootScope.$broadcast("SearchAluno",data)
			     });
		}

		function insertAluno(user, callback) {
		
			$http
				.post(endURL, 
					user
				)
				.then(function (data) {
					callback(data);
				})
		}

		function updateAluno(user, callback) {
		
			$http
				.put(endURL, 
					user
				)
				.then(function (data) {
					callback(data);
				})
		}
		function deleteAluno(user, callback) {
			
			$http
				.delete(endURL, {
					params:user
				})
				.then(function (data) {
					callback(data);
				})
		}

		return {
			getAlunoByQuery:getAlunoByQuery,
			insertAluno:insertAluno,
			deleteAluno:deleteAluno,
			updateAluno:updateAluno
		}
	}])


})()