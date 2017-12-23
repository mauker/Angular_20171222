
/*Require é uma ferramenta que efetua o 
carregamento do módulo que estamos solicitando*/

// Requisitamos o módulo http do Node 
var http = require('http');
var url = require("url");

// Executamos o método para criar o servidor
var server = http.createServer( function(request, response) {
				

				console.log(request.url);


				response.writeHead(200, {'Content-Type': 'text/html'});

				//efetuando o parse das informaçõs da URL
				var result = url.parse(request.url, true);

				for(key in result.query){
					response.write("<h1>" + key + ":<i>"+ result.query[key] + "</i></h1>");
				}
				
				response.end(); 

				}
			);

//Iniciamos o server
server.listen(3000, function () {
	console.log("Server online na porta 3000");
})