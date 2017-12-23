//Carregando o framework do express para dentro do nosso server
const express = require('express');

//criamos uma instancia do express que vamos chamar de app
const app = express();

//no express o app pode receber metodos que representam a rota de acesso a essa informação
app.get('/', function (req, res) {
  res.send('<h3>Hello World!</h3>');
});

//para iniciarmos o servidor nós excutamos o método listen
app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});