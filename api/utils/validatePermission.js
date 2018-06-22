// Middlwware to validate that a user has valid credentials for the rwsource they are trying to access
const getPayloadFromToken = require('./getPayloadFromToken');
const errorHandler = require('./errorHandler');
const User = require('../models/users');

function validatePermission(req, res, next) {
  const payload = getPayloadFromToken(req);
  User.findById(payload.id, (err, user) => {
    if (err) {
      errorHandler(res, 401, err);
    } else {
      next();
    }
  });
}

module.exports = validatePermission;