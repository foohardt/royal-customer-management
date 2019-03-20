var express = require('express');
var router = express.Router();

// Require customer model
const customer = require('../models/customer');

// GET customer list
router.get('/', function(req, res, next) {
  // Do something
});

module.exports = router;
