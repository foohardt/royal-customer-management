var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');

// Require customer model
var Customer = require('./models/customer');

// Require routes
var indexRouter = require('./routes/index');
var costumerRouter = require('./routes/costumers');

require('./configs/database');

var app = express();

// Use middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', indexRouter);
app.use('/api/kunden', costumerRouter);

// Catch 404 error for any route that start with "/api"
app.use('/api/*', (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// For any other route redirect to client index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Error handler
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  console.error("----- An error happened -----");
  console.error(err);
  if (process.env.NODE_ENV === 'production')
    res.json(err); // A limited amount of information sent in production
  else
    res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))));
});

module.exports = app;
