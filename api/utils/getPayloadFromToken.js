const verifyToken = require('./verifyToken');

function getPayloadFromToken(req) {
  const token = req.headers.authorization.split(' ')[1];

  // Will verify the token and return its payload
  return verifyToken(token);
}

module.exports = getPayloadFromToken;