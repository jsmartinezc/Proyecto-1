import { Customer } from "../types/customers.types";
import {
  readCustomers,
  readCustomerById,
  readCustomerByAccountNumber,
  createCustomer,
  updateCustomer,
  deleteCustomerByAccountNumber,
} from "../data/customers.data";

const getCustomers = (): Promise<{
  code: number;
  result: string | Customer[];
}> => {
  return new Promise((resolve, reject) => {
    readCustomers()
      .then((response: Customer[]) => {
        const localCustomersDB = response;
        resolve({ code: 200, result: localCustomersDB });
      })
      .catch((error) => {
        reject({ code: 500, message: 'Something went wrong' });
      });
  });
};

const getCustomerById = (
  id: string
): Promise<{ code: number; message: string | Customer }> => {
  return new Promise((resolve, reject) => {
    readCustomerById(id)
      .then((response) => {
        if ((response as Customer[]).length === 0) {
          resolve({ code: 404, message: 'Customer not found' });
        } else {
          resolve({ code: 200, message: response as Customer });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: 'Something went wrong' });
      });
  });
};

const getCustomerByAccountNumber = (
  name: string
): Promise<{ code: number; message: string | Customer }> => {
  return new Promise((resolve, reject) => {
    readCustomerByAccountNumber(accountNumber)
      .then((response) => {
        if ((response as Customer[]).length === 0) {
          resolve({ code: 404, message: 'Customer not found' });
        } else {
          resolve({ code: 200, message: response as Customer });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: 'Something went wrong' });
      });
  });
};

const postCustomer = (
  body: Customer
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    createCustomer(body)
      .then((response) => {
        resolve({ code: 201, message: response as string });
      })
      .catch((error) => {
        reject({ code: 500, message: 'Something went wrong' });
      });
  });
};

const putCustomer = (
  id: string,
  body: Customer
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    updateCustomer(id, body)
      .then((response) => {
        if (response === 200)
          resolve({
            code: 200,
            message: 'Customer updated' as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: 'Customer not found' });
        } else {
          reject({ code: 500, message: 'Something went wrong' });
        }
      });
  });
};

const deleteCustomer = (
  id: string
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    deleteCustomerByAccountNumber(id)
      .then((response) => {
        if (response === 200) {
          resolve({ code: 200, message: 'Customer deleted' });
        }
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: 'User not found' });
        } else {
          reject({ code: 500, message: 'Something went wrong.' });
        }
      });
  });
};

export {
  getCustomers,
  getCustomerById,
  getCustomerByAccountNumber,
  postCustomer,
  putCustomer,
  deleteCustomer,
};
