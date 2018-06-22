//  Auth middlware
//
function validateToken(req, res, next) {
  // Check if JWT is present
  // Authorization: Bearer <token>
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    req.token = token;
    next();
  } else {
    res.json({
      status: 403,
      message: 'Token not found.'
    });
  }
}

module.exports = validateToken;
