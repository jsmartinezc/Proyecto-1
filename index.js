var express = require("express");
var app = express(); // Esta instancia.
var PORT = 3000;
//
app.get(PORT, function (request, response) {
    response.send("Hola mundo desde get");
});
