const jwt = require('jsonwebtoken');

const config = require('../config');

function verifyToken(token) {
  return jwt.verify(token, config.development.secret);
}

module.exports = verifyToken;
