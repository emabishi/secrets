const bcrypt = require('bcrypt');

function validatePassword(enteredPassword, passwordHash) {
  bcrypt.compare(enteredPassword, passwordHash, (err, res) => res);
}

module.exports = validatePassword;
