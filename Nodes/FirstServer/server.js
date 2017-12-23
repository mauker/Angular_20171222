/*Require é uma ferramenta que efetua o 
carregamento do módulo que estamos solicitando*/

// Requisitamos o módulo http do Node 
var http = require('http');
var faker = require("faker");


// Executamos o método para criar o servidor
var server = http.createServer( function(request, response) {
				
				response.writeHead(200, {'Content-Type': 'text/html'});

				var randomName = faker.name.findName(); 
				var randomImage = faker.internet.avatar();
				response.write('Your random name: ' + randomName + "<img src='"+randomImage + "'/>");
				
				response.end(); 

				}
			);

//Iniciamos o server
server.listen(3000, function () {
	console.log("Server online na porta 3000");
})