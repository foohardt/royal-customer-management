const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  sex: {
    type: Number,
    enum: [1, 2],
  },
  adress: {
    street: String,
    number: Number,
    city: String,
    zipcode: Number,
  },
},
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;