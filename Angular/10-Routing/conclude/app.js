(function(){
    
    //as rotas são componetes a parte e devem ser importadas na criação do APP
    angular.module('routingApp', ['ngRoute'])
    
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/pagina1', {
                    controller: 'Pagina1Ctrl',
                    templateUrl: 'partials/pagina1.html'
                })
                .when('/pagina1/:nome/', {
                    controller: 'Pagina1Ctrl',
                    templateUrl: 'partials/pagina1.html'
                })
                .when('/pagina1/:nome/:idade', {
                    controller: 'Pagina1Ctrl',
                    templateUrl: 'partials/pagina1.html'
                })
                .when('/pagina2', {
                    controller: 'Pagina2Ctrl',
                    templateUrl: 'partials/pagina2.html'
                })
                .when('/pagina3', {
                    controller: 'Pagina3Ctrl',
                    templateUrl: 'partials/pagina3.html'
                })
                .otherwise('/pagina1');
        }]);

    angular.module('routingApp')
        .controller('Pagina1Ctrl', ['$scope', '$routeParams', function($scope, $routeParams){
            $scope.nome = $routeParams.nome;
            $scope.idade = $routeParams.idade;
        }])
        .controller('Pagina2Ctrl', ['$scope', function($scope){

        }])
        .controller('Pagina3Ctrl', ['$scope', function($scope){

        }])

}());