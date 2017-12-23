    // set up ========================
    var express  = require('express');
    var app      = express(); // create our app w/ express
   
    //nós estamos criando um local para referenciar nossos arquivos
    app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users
  
     // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // listen (start app with node server.js) ======================================
    app.listen(3000);
    console.log("App listening on port 3000 ;)");



