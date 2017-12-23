
/*Require é uma ferramenta que efetua o 
carregamento do módulo que estamos solicitando*/

// Requisitamos o módulo http do Node 
var http = require('http');

// Executamos o método para criar o servidor
var server = http.createServer( function(request, response) {
				

				console.log(request.url);


				response.writeHead(200, {'Content-Type': 'text/html'});
				if(request.url === "/"){
					response.write('<h1>Página inicial</h1>');	
				}else if(request.url === "/sobre"){
					response.write('<h1>Sobre</h1>');	
				}else{
					response.write('<h1>Pagina nao encontrada!</h1>');	
				}

				
				response.end(); 

				}
			);

//Iniciamos o server
server.listen(3000, function () {
	console.log("Server online na porta 3000");
})