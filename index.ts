import express from "express"; //complenet modules

const app = express(); // the app has been created

const PORT = 3000; // port assigned
app.use(express.json());

interface Customer {
  id: string;
  cc: string; // is not a int because we don't complete math operations with the numbers
  name: string;
  email: string;
  birthDate: string;
  cel: string;
  address: string;
}

const customersDB: Customer [] = [
  {
    id: "1",
    cc: "1234",
    name: "pepito",
    email: "pepito@gmail.com",
    birthDate: "01/01/1990",
    cel: "3001234567",
    address: "cll falsa # 123",
  },
  {
    id: "2",
    cc: "12345",
    name: "pepe",
    email: "pepeo@gmail.com",
    birthDate: "01/01/1995",
    cel: "3001234568",
    address: "cll falsa # 124",
  },
];

app.get('/customers', function (request, response) {
  response.json(customersDB);
});


app.get('/customers/:id', function (request, response) {
  const id = request.params.id;
  const result = customersDB.filter(item => item.id === id);
  response.json(result);
});

app.post('/customers', function (request, response) {
  const body = request.body;
  customersDB.push(body);
  response.send('El cliente se ha guardado');
});

app.put('/customers/:id', function (request, response) {
  const id = request.params.id;
  const body = request.body;
  const customerIndex = customersDB.findIndex(item => item.id === id);
  customersDB[customerIndex] = body;
  response.send('Cliente actualizado correctamente');
});

app.delete('/customers/:id', function (request, response) {
  const id  = request.params.id;
  customersDB.filter(item => item.id !== id)
  response.send('Hola mundo desde delete');
});

app.listen(PORT, function () {
  console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});
