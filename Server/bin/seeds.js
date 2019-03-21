const mongoose = require('mongoose');
const Customer = require('../models/customer');

const dbName = 'royal-customer-management';
mongoose.connect(`mongodb://localhost/${dbName}`);

const firstCustomers = [
  {
    name: {
      first: 'Lothar',
      last: 'Mätthaus',
    },
    sex: 2,
    adress: {
      street: 'Finkenweg',
      number: 7,
      city: 'Hamburg',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Florian',
      last: 'Silbereisen',
    },
    sex: 2,
    adress: {
      street: 'Neverland-Ranch',
      number: 26,
      city: 'Frankfurt-Main',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Gina-Lisa',
      last: 'Lohfink',
    },
    sex: 1,
    adress: {
      street: 'Mallorca-Weg',
      number: 10,
      city: 'Frankfurt-Oder',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Michaela',
      last: 'Schäfer',
    },
    sex: 1,
    adress: {
      street: 'Hauptstraße',
      number: 68,
      zipcode: 0815,
    },
  },
];

Customer.deleteMany()
  .then(() => Customer.create(firstCustomers))
  .then(() => {
    console.log('Customer db bootstrapped')
    mongoose.connection.close();
  })
  .catch(err => {
    throw err;
  });