const jwt = require('jsonwebtoken');

const config = require('../config')[process.env.NODE_ENV];

function verifyToken(token) {
  return jwt.verify(token, config.secret);
}

module.exports = verifyToken;
