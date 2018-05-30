/* eslint-disable no-console */

const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const router = express.Router();

const config = require('./config');
const routes = require('./routes');

// https://expressjs.com/en/4x/api.html#app.settings.table
app.set('env', config.development.env);
app.set('port', config.development.port);

// Inject all incoming request payload parameters as the req.body property of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use('/', routes(router));

app.listen(app.get('port'), (err) => {
  if (err) {
    console.error(`Error connecting to ${config.development.port} \n err`);
  } else {
    console.log(`Server now listening at localhost:${app.get('port')}`);
  }
});

mongoose.connect(`${config.development.db}`, (err) => {
  if (err) {
    console.error('Error connecting to mongoose');
  } else {
    console.log(`Connection with mongoose established at ${config.development.db}`);
  }
});
