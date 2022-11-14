const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');

module.exports = function() {
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
