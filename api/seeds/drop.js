const mongoose = require('mongoose');

const config = require('../config');

const User = require('../models/users');
const Note = require('../models/notes');

/* eslint-disable no-console */

// TODO: Create db for testing

const connection = mongoose.connect(config.testing.db);

connection.on('error', (err) => {
  console.error(`Error connecting to db ${config.testing.db} \n ${err}`);
});

function dropUsers() {
  User.deleteMany({}, (err) => {
    if (err) {
      console.error(`Error dropping users in test environment. ${err} \n \n`);
    } else {
      console.log(`Successfully dropped users in test environment. \n \n`);
    }
  });
}

function dropNotes() {
  Note.deleteMany({}, (err) => {
    if (err) {
      console.error(`Error dropping users in test environment. ${err} \n \n`);
    } else {
      console.log(`Successfully dropped users in test environment. \n \n`);
    }
  });
}

function drop() {
  dropUsers();
  dropNotes();
}

connection.once('open', drop());
connection.close();
console.log('Connection closed after dropping collections ....');