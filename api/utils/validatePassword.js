const bcrypt = require('bcrypt');

function validatePassword(enteredPassword, passwordHash) {
  return bcrypt.compare(enteredPassword, passwordHash);
}

module.exports = validatePassword;
