//@todo: change name to Customer / no "S" 
const Customers = require('../models/Customers');

// @todo remove all comments here and give functions better names. 
// eg: addCustomer, listAllCustomers, etc...

// @todo remove code duplication and create a generic function that can handle all requests to the database
/* eg: 
  const createClient = (req, res, next) => {
    return async (config) => {
      try {
        await config.request(req)
      } catch (err) {
        onError && config.onError()
      } finally {
        onSuccess && config.onSuccess()
        next()
      }
    }
  } 

  const cusomerClient = createClient(req, res, next);
  
  const config = {
    request: (req) => {
      const customer = new customer(req.body);
      customer.save();
    }
  }
  customerClient(config)
*/

// @todo write another function to handle the creation of the response.
/*
  const createResponseData = ({ message }) => {
    return {
      message: message
    }
  }

  const data = createResponseData({
    message: 'New customer added'
  })

  res.json(data);
*/

// add Customer
exports.add = async (req, res, next) => {
  const customer = new Customers(req.body);

  try {
    await customer.save();

    res.json({ message: 'New customer added' });
  } catch (error) {
    console.log(error);
    res.send(error);
    next()
  }
};

// get customers
exports.list = async (req, res) => {
  try {
    const customers = await Customers.find({});
    res.json(customers);
  } catch (error) {
    console.log(error);
    res.send(error);
    next();
  }
};


// get customer by :id
exports.show = async (req, res, next) => {
  try {
    const customer = await Customers.findById(req.params.id);
    if (!customer) {
    res.json({
      message: 'Customer doesn\'t exists'
    });
    next();
    }

    res.json(customer);
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your info'
    });
    next();
  }
};

// put: update customer
exports.update = async (req, res, next) => {
  try {
    const customer = await Customers.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } // return updated
    );
    res.json({
      message: 'Customer updated successfuly'
    });
  } catch (error) {
    console.log(error);
    /*res.json({
      message: 'Error, check your sended info'
    });*/
    res.send(error);
    next();
  }
};

// delete: customer
exports.delete = async (req, res, next) => {
  try {
    await Customers.findOneAndDelete({ _id: req.params.id });
    res.json({
      message: 'Customer was deleted'
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error, check your sended info'
    });
    next();
  }
};

