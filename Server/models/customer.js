const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  sex: {
    type: Number,
    enum: [0, 1, 2],
    default: 0,
  },
  adress: {
    street: String,
    number: Number,
    zipcode: Number,
  },
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;