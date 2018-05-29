/* eslint-disable no-console */

const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const router = express.Router();

const config = require('./config');
// const userRoutes = require('./routes/users');
// const noteRoutes = require('./routes/notes');

// https://expressjs.com/en/4x/api.html#app.settings.table
app.set('env', config.development.env);
app.set('port', config.development.port);

// Use bodyParser as express middlware to inject all incoming request payload
// parameters as the req.body property of the request
// https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
// app.use(bodyParser.urlencoded({ extended: true }));
// OR

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/', router);
// app.use('/', userRoutes(router));


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
