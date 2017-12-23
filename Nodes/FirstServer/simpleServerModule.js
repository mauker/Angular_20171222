
/*Require é uma ferramenta que efetua o 
carregamento do módulo que estamos solicitando*/

// Requisitamos o módulo http do Node 
var http = require('http');
var circulo = require("./circulo");
var url = require("url");

// Executamos o método para criar o servidor
var server = http.createServer( function(request, response) {
				

					console.log(circulo);
				
					//o result é o resulto do PARSE, ou seja da analise das informações que existem na URL
					
					var result = url.parse(request.url, true);

					console.log(result);

					var raio = result.query.raio;
				
					response.writeHead(200, {'Content-Type': 'text/html'});
					
					response.write("Area de "+ raio + ": " + circulo.area(raio));

					response.end(); 
				

				}
			);

//Iniciamos o server
server.listen(3000, function () {
	console.log("Server online na porta 3000");
})