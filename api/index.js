/* eslint-disable no-console */

const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const router = express.Router();

const config = require('./config')[process.env.NODE_ENV];
const routes = require('./routes');


// Inject all incoming request payload parameters as the req.body property of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use('/', routes(router));

app.listen(config.port, (err) => {
  if (err) {
    console.error(`Error connecting to ${config.port} \n err`);
  } else {
    console.log(`Server now listening at localhost:${config.port}`);
  }
});

mongoose.connect(config.db, (err) => {
  if (err) {
    console.error('Error connecting to mongoose');
  } else {
    console.log(`Connection with mongoose established at ${config.db}`);
  }
});

module.exports = app;