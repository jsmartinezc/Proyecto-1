"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.putCustomer = exports.postCustomer = exports.getCustomerByAccountNumber = exports.getCustomerById = exports.getCustomers = void 0;
var customers_data_1 = require("../data/customers.data");
var getCustomers = function () {
    return new Promise(function (resolve, reject) {
        (0, customers_data_1.readCustomers)()
            .then(function (response) {
            var localCustomersDB = response;
            resolve({ code: 200, result: localCustomersDB });
        })
            .catch(function (error) {
            reject({ code: 500, message: 'Something went wrong' });
        });
    });
};
exports.getCustomers = getCustomers;
var getCustomerById = function (id) {
    return new Promise(function (resolve, reject) {
        (0, customers_data_1.readCustomerById)(id)
            .then(function (response) {
            if (response.length === 0) {
                resolve({ code: 404, message: 'Customer not found' });
            }
            else {
                resolve({ code: 200, message: response });
            }
        })
            .catch(function (error) {
            reject({ code: 500, message: 'Something went wrong' });
        });
    });
};
exports.getCustomerById = getCustomerById;
var getCustomerByAccountNumber = function (name) {
    return new Promise(function (resolve, reject) {
        (0, customers_data_1.readCustomerByAccountNumber)(accountNumber)
            .then(function (response) {
            if (response.length === 0) {
                resolve({ code: 404, message: 'Customer not found' });
            }
            else {
                resolve({ code: 200, message: response });
            }
        })
            .catch(function (error) {
            reject({ code: 500, message: 'Something went wrong' });
        });
    });
};
exports.getCustomerByAccountNumber = getCustomerByAccountNumber;
var postCustomer = function (body) {
    return new Promise(function (resolve, reject) {
        (0, customers_data_1.createCustomer)(body)
            .then(function (response) {
            resolve({ code: 201, message: response });
        })
            .catch(function (error) {
            reject({ code: 500, message: 'Something went wrong' });
        });
    });
};
exports.postCustomer = postCustomer;
var putCustomer = function (id, body) {
    return new Promise(function (resolve, reject) {
        (0, customers_data_1.updateCustomer)(id, body)
            .then(function (response) {
            if (response === 200)
                resolve({
                    code: 200,
                    message: 'Customer updated',
                });
        })
            .catch(function (error) {
            if (error === 404) {
                reject({ code: 404, message: 'Customer not found' });
            }
            else {
                reject({ code: 500, message: 'Something went wrong' });
            }
        });
    });
};
exports.putCustomer = putCustomer;
var deleteCustomer = function (id) {
    return new Promise(function (resolve, reject) {
        (0, customers_data_1.deleteCustomerByAccountNumber)(id)
            .then(function (response) {
            if (response === 200) {
                resolve({ code: 200, message: 'Customer deleted' });
            }
        })
            .catch(function (error) {
            if (error === 404) {
                reject({ code: 404, message: 'User not found' });
            }
            else {
                reject({ code: 500, message: 'Something went wrong.' });
            }
        });
    });
};
exports.deleteCustomer = deleteCustomer;
