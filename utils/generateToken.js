const jwt = require('jsonwebtoken');
const config = require('../config');

function generateToken(req) {
  return new Promise((resolve, reject) => {
    const payload = {
      expiresIn: '1d',
      issuer: 'secretsapplication',
      username: req.body.username
    };
    jwt.sign(payload, config.development.secret, (err, token) => {
      // Add token to request object
      if (err) {
        const error = `Error generating token , ${err} `;
        reject(error);
      } else {
        req.headers.authorization = token;
        resolve(token);
      }
    });
  });
}

module.exports = generateToken;
