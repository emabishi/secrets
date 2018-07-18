const mongoose = require('mongoose');

const config = require('../config')[process.env.NODE_ENV];
const data = require('./data');

const User = require('../models/users');
const Note = require('../models/notes');

/* eslint-disable no-console */

// TODOD: Figure out why passwords in test db are not being hashed bedore saving

function gracefulExit() {
  mongoose.connection.close(() => {
    console.log(`Mongoose default connection with DB : ${config.db} is disconnected through app termination`);
    process.exit(0);
  });
}

function seedUsers() {
  console.log('Attempting to seed users collection .......... \n');

  User.create(data.users, (err, users) => {
    if (err) {
      console.error(`Error seeding users in test environment. \n \n ${err}`); 
      process.exit(1);
    } else {
      console.log(`Successfully seeded users in test environment \n ${users} \n \n`);
    }
    process.exit(0);
  });
}

function seedNotes() {
  console.log('Attempting to seed notes collection ..........\n');

  Note.create(data.notes, (err, notes) => {
    if (err) {
      console.error(`Error seeding notes in test environment. \n \n ${err}`);
      process.exit(1);
    } else {
      console.log(`Successfully seeded notes in test environment \n ${notes} \n \n`);
    }
  });
}

function seed() {
  console.log(`Successfully connected to db ${config.db}
              Attempting to seed database now .... \n`);
  seedNotes();
  seedUsers();
}


mongoose.connect(config.testing.db, {}, (err) => {
  if (err) {
    console.error(`Error connecting to db ${config.db} \n ${err}`);
  } else {
    seed();
  }
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);