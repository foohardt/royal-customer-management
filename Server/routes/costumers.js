var express = require('express');
var router = express.Router();

// Require customer model
const Customer = require('../models/customer');

// GET list of all customers
router.get('/', (req, res, next) => {
  Customer.find()
    .then(customers => {
      res.json(customers)
    })
    .catch(err => next(err));
});

// GET one customer by id 
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Customer.findById(id)
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err));
});

// GET list of customers by query for lastname  ?nachname=xxx
// POST new customer
// PUT edit customer by id /:id
// DELETE customer by id /:id

module.exports = router;
