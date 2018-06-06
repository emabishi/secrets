
// TODO: Implement middlware that is invoked to remove all notes when a user is deleted

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const config = require('../config');

const UserSchema = new Schema({
  name: {
    type: 'String',
    required: true,
    trim: true,
  },
  username: {
    type: 'String',
    lowercase: true,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: 'String',
    lowercase: true,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: 'String',
    required: true,
    trim: true,
  },
});

// middlware to has the password before a user is saved
UserSchema.pre('save', function (next) {
  const user = this;
  // If the user document has been modified or is new
  if (user.isModified || user.isNew) {
    bcrypt.hash(user.password, config.development.saltingRounds, function(err, hash) {
      if (err) {
				console.error('Error hashing password for user'); // eslint-disable-line
        next(err);
      } else {
        // Save the hash in the db as the password
        user.password = hash;
        next();
      }
    });
  } else {
    next();
  }
});

// http://mongoosejs.com/docs/guide.html#timestamps
// Add the comparePassword method to the schema such that if model.comparePassword is called, it calls the function added
UserSchema.methods.comparePassword = (plaintextPassword) => {
  const user = this;
  const hash = user.password;
  bcrypt.compare(plaintextPassword, hash, (err, res) => res);
};

// Creates a new document i.e. a user in the Users collection
module.exports = mongoose.model('User', UserSchema);
