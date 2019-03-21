var express = require('express');
var router = express.Router();

// Require customer model
const Customer = require('../models/customer');

// GET one customer by param "nachname" and if !nachname get list of all
router.get('/', (req, res, next) => {
  if (req.query.nachname) {
    const lastName = req.query.nachname;

    Customer.findOne({ 'name.last': lastName })
      .then(customer => {
        res.json(customer);
      })
      .catch(err => next(err));
  } else {
    
    Customer.find()
      .then(customers => {
        res.json(customers);
      })
      .catch(err => next(err))
  }
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

router.get('/', (req, res, next) => {
  const lastName = req.query.nachname;
  console.log("LASTNAME", lastName)
});

// POST new customer
// PUT edit customer by id /:id
// DELETE customer by id /:id

module.exports = router;
