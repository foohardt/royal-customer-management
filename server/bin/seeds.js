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
      city: 'Hamburg',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Donald',
      last: 'Duck',
    },
    sex: 2,
    adress: {
      street: 'Quakstraße',
      number: 23,
      city: 'Entenhausen',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Angela',
      last: 'Merkel',
    },
    sex: 1,
    adress: {
      street: 'Alle-der-Uckermark',
      number: 86,
      city: 'Potsdam',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Daniel',
      last: 'Düsentrieb',
    },
    sex: 2,
    adress: {
      street: 'Triebradstraße',
      number: 17,
      city: 'Entenhausen',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Donald',
      last: 'Duck',
    },
    sex: 2,
    adress: {
      street: 'Quakstraße',
      number: 23,
      city: 'Entenhausen',
      zipcode: 0815,
    },
  },
  {
    name: {
      first: 'Berti',
      last: 'Vogts',
    },
    sex: 1,
    adress: {
      street: 'Hopfenstraße',
      number: 15,
      city: 'München',
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