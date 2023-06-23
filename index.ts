const express = require("express");

const app = express(); // Esta instancia.

const PORT = 3000;
app.use(express.json());

const customers = [{
    name: "pepito",
    cc: "1234",
    email: "pepito@gmail.com",
    birthDate: "01/01/1990",
    cel: "3001234567",
    address: "cll falsa # 123"
},
{
    name: "fulanito",
    cc: "1234",
    email: "fulanito@gmail.com",
    birthDate: "01/01/1989",
    cel: "3001234568",
    address: "cll falsa # 124"
}

];
app.get('/customers', (request, response) => {
  response.json(customers);
});
