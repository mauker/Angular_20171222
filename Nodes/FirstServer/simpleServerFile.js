
/*Require é uma ferramenta que efetua o 
carregamento do módulo que estamos solicitando*/

// Requisitamos o módulo http do Node 
var http = require('http');
var fs = require("fs");

// Executamos o método para criar o servidor
var server = http.createServer( function(request, response) {
				

				
				//atraves do fs vamos ler o conteúdo do arquivo
				fs.readFile(__dirname + '/index.html', function(err,html){

					response.writeHead(200, {'Content-Type': 'text/html'});
					response.write(html);
					response.end(); 
				})


				}
			);

//Iniciamos o server
server.listen(3000, function () {
	console.log("Server online na porta 3000");
})