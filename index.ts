import { BADFLAGS } from "dns";
import express from "express"; //complement modules

const app = express(); // the app has been created

const PORT = 3000; // port assigned
app.use(express.json());

interface Customer {
  id: string;
  cc: string; // is not a Int because we don't execute math operations with this numbers
  name: string;
  email: string;
  birthDate: string;
  cel: string;
  address: string;
}

const customersDB: Customer[] = [
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

interface Account {
  accountNumber: string;
  accountType: string;
  balance: string;
}

const accountDB: Account[] = [
  {
    accountNumber: "123456789",
    accountType: "Ahorros",
    balance: "1000000",
  },

  {
    accountNumber: "12345678910",
    accountType: "Corriente",
    balance: "500000",
  },
];

app.get("/Customer/:accountNumber", function (request, response) {
  const accountNumber = request.params.accountNumber;
  const result = accountDB.filter((item) => item.accountNumber === accountNumber);
  response.json(result);
});

app.post("/Customer", function (request, response) {
  const body = request.body;
  customersDB.push(body);
  response.send("El cliente se ha guardado");
});

app.delete("/Customer/:id", function (request, response) {
  const id = request.params.id;
  customersDB.filter((item) => item.id !== id);
  response.send("Hola mundo desde delete");
});

app.listen(PORT, function () {
  console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});
