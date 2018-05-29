const jwt = require('jsonwebtoken');

const config = require('../config');

function verifyToken(token) {
  jwt.verify(token, config.development.secret, (err, payload) => {
    if (err) {
      return err;
    } else {
      return payload;
    }
  });
}

module.exports = verifyToken;
