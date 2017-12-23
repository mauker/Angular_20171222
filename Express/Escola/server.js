
//Carregando o framework do express para dentro do nosso server
const express = require('express');

//importar o mongoose
const mongoose = require('mongoose');

//criamos uma instancia do express que vamos chamar de app
const app = express();

// pull information from HTML POST (express4)
const bodyParser = require('body-parser'); 
// parse application/json
app.use(bodyParser.json());


// Equivalent to the above code
mongoose.connect("mongodb://localhost:27017/escola");

//A declaração do esquema dos meus dados
var AlunoSchema = mongoose.Schema({
	nome:String,
	idade:Number,
    profissao:String,
    cursando:String
});
//A declaração do modelo, pelo qual eu manipularei o meu esquema
var Aluno = mongoose.model("alunos",AlunoSchema);


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Inicio da API
//no express o app pode receber metodos que representam a rota de acesso a essa informação
app.get('/api/alunos/', function (req, res) {
   
    var query = {}

    if(req.query.nome != undefined){
        query = {nome:req.query.nome}
    }
	//Nós estamos executando o método no mongo
	Aluno.find(query,
		//é a função de callback, sempre recebemos o erro primeiro
		function(err, alunos){
			//caso recebamos um erro enviamos para o console
			if (err) return console.error(err);
			//nós podemos utilizar os dados que pedimos
	  		res.json(alunos);
  		}
	)
});

app.post('/api/alunos/', function (req, res) {

    console.log(req)
	Aluno.create({

		nome:req.body.nome,
		idade:req.body.idade,
	    profissao:req.body.profissao,
	    cursando:req.body.cursando

	}, function (err, result) {
		//caso recebamos um erro enviamos para o console
		if (err) {
            console.error(err);
            res.send(err)
            return
        }
		//nós podemos utilizar os dados que pedimos
	  	res.json(result);
	})

});

app.put('/api/alunos/', function (req, res) {

  		var alunoAtualizado = { $set:{  nome:req.body.nome,
                                       idade:req.body.idade,
                                   profissao:req.body.profissao,
                                    cursando:req.body.cursando 
                                    }}

        Aluno.findOneAndUpdate({"_id":req.body._id}, alunoAtualizado, function (error, result) {
            if(error)
                res.send(error)

            res.json(result)
        })
});

app.delete('/api/alunos/', function (req, res) {
  
  	Aluno.remove({"_id":req.query._id},function (error, result) {
        if(error){
            res.send(error)
            return
        }

        res.json(result)
    })
});
//para iniciarmos o servidor nós excutamos o método listen
app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});