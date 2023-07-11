"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerByAccountNumber = exports.updateCustomer = exports.createCustomer = exports.readCustomerByName = exports.readCustomerById = exports.readCustomers = void 0;
var customersDB_1 = require("../../customersInformation");
var localCustomersDB = customersDB_1.customersDB;
var readCustomers = function () {
    return new Promise(function (resolve, reject) {
        try {
            resolve(localCustomersDB);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.readCustomers = readCustomers;
var readCustomerById = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            var result = localCustomersDB.filter(function (item) { return item.id === id; });
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.readCustomerById = readCustomerById;
var readCustomerByName = function (name) {
    return new Promise(function (resolve, reject) {
        try {
            var result = localCustomersDB.filter(function (item) { return item.name === name; });
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.readCustomerByName = readCustomerByName;
var createCustomer = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            localCustomersDB.push(body);
            resolve("Customer added");
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.createCustomer = createCustomer;
var updateCustomer = function (id, body) {
    return new Promise(function (resolve, reject) {
        try {
            var customerIndex = localCustomersDB.findIndex(function (item) { return item.id === id; });
            if (customerIndex === -1) {
                reject(404);
            }
            else {
                localCustomersDB[customerIndex] = body;
                resolve(200);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.updateCustomer = updateCustomer;
var deleteCustomerByAccountNumber = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            var result = localCustomersDB.filter(function (item) { return item.id !== id; });
            if (result.length === localCustomersDB.length) {
                reject(404);
            }
            else {
                localCustomersDB = result;
                resolve(200);
            }
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.deleteCustomerByAccountNumber = deleteCustomerByAccountNumber;
