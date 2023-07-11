import { customersDB } from "../../customersDB";
import { Customer } from "../types/customers.types";

let localCustomersDB = customersDB;

const readCustomers = (): Promise<Customer[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localCustomersDB);
    } catch (error) {
      reject(error);
    }
  });
};

const readCustomerById = (id: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localCustomersDB.filter((item) => item.id === id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const readCustomerByName = (name: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localCustomersDB.filter((item) => item.name === name);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const createCustomer = (body: Customer) => {
  return new Promise((resolve, reject) => {
    try {
      localCustomersDB.push(body);
      resolve("Se ha agregado cliente");
    } catch (error) {
      reject(error);
    }
  });
};

const updateCustomer = (id: string, body: Customer) => {
  return new Promise((resolve, reject) => {
    try {
      const customerIndex = localCustomersDB.findIndex(
        (item) => item.id === id
      );
      if (customerIndex === -1) {
        reject(404);
      } else {
        localCustomersDB[customerIndex] = body;
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCustomerById = (id: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localCustomersDB.filter((item) => item.id !== id);
      if (result.length === localCustomersDB.length) {
        reject(404);
      } else {
        localCustomersDB = result;
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export {
  readCustomers,
  readCustomerById,
  readCustomerByName,
  createCustomer,
  updateCustomer,
  deleteCustomerById,
};
