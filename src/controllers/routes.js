"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
var customers_controller_1 = require("./customers.controller");
var books_controller_1 = require("./books.controller");
function routerApi(app) {
    app.use('/customers', customers_controller_1.default);
    app.use('/books', books_controller_1.default);
}
exports.routerApi = routerApi;
