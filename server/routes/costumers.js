var express = require('express');
var router = express.Router();

// Require customer model
const Customer = require('../models/customer');

// GET one customer by "nachname". If !nachname get list of all
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

// POST new customer
router.post('/', (req, res, next) => {
  const body = req.body;

  const customer = {
    name: {
      first: body.nameFirst,
      last: body.nameLast,
    },
    sex: body.sex,
    adress: {
      street: body.adressStreet,
      number: body.adressNumber,
      city: body.adressCity,
      zipcode: body.adressZipcode,
    }
  };

  new Customer(customer)
    .save()
    .then(() => {
      res.redirect('/')
    })
    .catch(err => next(err));
});

// PUT customer update by id 
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  Customer.findByIdAndUpdate(id, body)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => next(err));
})

// DELETE customer by id 
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  Customer.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => next(err));
})

module.exports = router;
