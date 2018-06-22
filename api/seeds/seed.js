const mongoose = require('mongoose');

const config = require('../config');
const data = require('./data');

const User = require('../models/users');
const Note = require('../models/notes');

/* eslint-disable no-console */

function seedUsers() {
  User.insertMany(data.users, (err, users) => {
    if (err) {
      console.error(`Error seeding users in test environment. \n \n`); 
    } else {
      console.log(`Successfully seeded users in test environment \n ${users} \n \n`);
    }
  });
}


function seedNotes() {
  Note.insertMany(data.notes, (err, notes) => {
    if (err) {
      console.error(`Error seeding notes in test environment. \n \n`);
    } else {
      console.log(`Successfully seeded notes in test environment \n ${notes} \n \n`);
    }
  });
}

function seed() {
  console.log(`Successfully connected to db ${config.testing.db}
              Attempting to seed database now ....`);
  seedUsers();
  seedNotes();
}

const connection = mongoose.connect(config.testing.db);

connection.on('error', (err) => {
  console.error(`Error connecting to db ${config.testing.db} \n ${err}`);
});

connection.once('open', seed());
connection.close();
console.log('Connection closed after seeding .....');