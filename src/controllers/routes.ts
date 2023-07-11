import express from 'express';

import customersControllers from './customers.controller';
import booksControllers from './info.controller';

function routerApi(app: express.Application){

  app.use('/customers', customersControllers);
  app.use('/books', booksControllers);
}

export { routerApi };