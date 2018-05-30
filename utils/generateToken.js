const jwt = require('jsonwebtoken');
const config = require('../config');

function generateToken(req) {
  const payload = {
    expiresIn: '1d',
    issuer: 'secretsapplication',
    username: req.body.username
  };
  jwt.sign(payload, config.development.secret, (err, token) => {
    // Add token to request object
    if (err) {
      console.log('Error generating token \n', err, '\n');
      return false;
    } else {
      req.headers.authorization = token;
      console.log('token', token);
      return true;
    }
  });
}

module.exports = generateToken;
