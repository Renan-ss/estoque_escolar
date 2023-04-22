const express = require('express');
const app = express();
const handlebars = require("express-handlebars");

app.use(express.static(__dirname + '/public'));

//Rotas
app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.get("/login", function(req, res){
	res.sendFile(__dirname + "/login.html");
});

app.get("/inicio", function(req, res){
	res.sendFile(__dirname + "/inicio.html");
});

app.get("/dashboard", function(req, res){
	res.sendFile(__dirname + "/dashboard.html");
});

app.get("/estoque", function(req, res){
	res.sendFile(__dirname + "/estoque.html");
});

app.get('/client.js', function(req, res) {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/client.js');
});

//resposta
app.post("/login", function(req, res){
	res.send("Envio Concluido");
});

//server
app.listen(3000, function(){
	console.log("Servidor online na porta 3000");
});