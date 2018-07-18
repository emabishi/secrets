const mongoose = require('mongoose');

const config = require('../config')[process.env.NODE_ENV];

const User = require('../models/users');
const Note = require('../models/notes');

/* eslint-disable no-console */

function gracefulExit() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection with DB :' + config.db + ' is disconnected through app termination');
    process.exit(0);
  });
}


function dropUsers() {
  User.deleteMany({}, (err) => {
    if (err) {
      console.error(`Error dropping users in test environment. ${err} \n \n`);
      process.exit(1);
    } else {
      console.log(`Successfully dropped users in test environment. \n \n`);
    }
  });
}

function dropNotes() {
  Note.deleteMany({}, (err) => {
    if (err) {
      console.error(`Error dropping notes in test environment. ${err} \n \n`);
      process.exit(1);
    } else {
      console.log(`Successfully dropped notes in test environment. \n \n`);
      process.exit(0);
    }
  });
}

function drop() {
  dropUsers();
  dropNotes();
}

mongoose.connect(`${config.db}`, {}, (err) => {
  if (err) {
    console.error(`Error connecting to db ${config.db} \n ${err}`);
  } else {
    drop();

  }
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);