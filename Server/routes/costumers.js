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

module.exports = router;
