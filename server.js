const express = require('express');
const app = express();
const handlebars = require("express-handlebars");

//Rotas
app.get("/", function(req, res){
	res.sendfile(__dirname + "/index.html");
});

app.get("/login", function(req, res){
	res.sendfile(__dirname + "/login.html");
});

//resposta
app.post("/login", function(req, res){
	res.send("Envio Concluido");
});

//server
app.listen(3000, function(){
	console.log("Servidor online na porta 3000");
});