"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = require("./src/controllers/routes");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(express_1.default.json());
(0, routes_1.routerApi)(app);
app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: http://localhost:" + PORT);
});
