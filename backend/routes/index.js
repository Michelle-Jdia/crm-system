const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');

// @todo remove useless comments
// @todo change endpoints to api/v1/customers/:id 
// @todo save all routes in a file like backend/api/routes.js
// @todo rename this route to backend/routes/customer.js

module.exports = function () {
  // ### Customers ###
  // post: add new client
  router.post('/customers', customersController.add);
  // get: all customers
  router.get('/customers', customersController.list);
  // get: client by :id
  router.get('/customers/:id', customersController.show);
  // put: update client
  router.put('/customers/:id', customersController.update);
  // delete: client
  router.delete('/customers/:id', customersController.delete);

  return router;
}
