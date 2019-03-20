const mongoose = require('mongoose');
const Customer = require('../models/customer');

const dbName = 'royal-customer-management';
mongoose.connect(`mongodb://localhost/${dbName}`);

const firstCustomers = [
  {
    lastname: "Matthäus",
    firstname: "Lothar",
    sex: "male", // TODO ENUM
    street: "Finkenweg 7",
    zipcode: "01815",
    city: "",
  },
  {
    lastname: "Matthäus",
    firstname: "Lothar",
    sex: "male", // TODO ENUM
    street: "Finkenweg 7",
    zipcode: "01815",
    city: "",
  },
  {
    name: "2 Pac",
    occupation: "singer",
    catchPhrase: "Fuck the world"
  }
];

Customer.deleteMany()
  .then(() => Customer.create(firstCustomers))
  .then(() => {
    console.log("Db seeded.")
    mongoose.connection.close();
  })
  .catch(err => {
    throw err;
  });