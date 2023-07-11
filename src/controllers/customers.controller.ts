
import express from 'express';

import {
  getCustomers,
  getCustomerById,
  getCustomerByAccountNumber,
  postCustomer,
  putCustomer,
  deleteCustomer,
} from '../services/customers.service';

const router = express.Router();

router.get('', async (req, res) => {
  try{
    const response = await getCustomers();

    res.status(response.code).json({ result: response.result });
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});


router.get('/id/:id', async (req,res) => {
  try{
    const id = req.params.id;

    const response = await getCustomerById(id);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

router.get('/name/:name', async (req,res) => {
  try{
    const name = req.params.name;
    const response = await getCustomerByAccountNumber(name);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

router.post('', async function(req, res) {
  try{
    const body = req.body;

    const response = await postCustomer(body);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

router.put('/:id', async function (req, res) {
  try{
    const id = req.params.id;
    const body = req.body;

    const response = await putCustomer(id, body);
    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});


router.delete('/:accountNumber', async function (req, res) {
  try{
    const accountNumber = req.params.accountNumber;

    const response = await deleteCustomer(accountNumber);

    res.status(response.code).json(response.message);
  }catch(error){
    console.log(error);
    const customError = error as {code: number, message: string};
    res.status(customError.code ).json(customError.message );
  }
});

export default router;