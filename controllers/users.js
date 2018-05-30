// Interacts with database and gets values/params from requests through the router
const validatePassword = require('../utils/validatePassword');
const generateToken = require('../utils/generateToken');
const verifyToken = require('../utils/verifyToken');

const User = require('../models/users');
const notesController = require('./notes');

module.exports = {
  register: (req, res, next) => {
    const { name, username, email, password } = req.body;
    const user = new User();

    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;

    user.save(err => {
      if (err) {
        res.json({
          status: 409,
          message: `Error ${err.code} ${err} Please enter unique email and password`,
        });
      } else {
        generateToken(req);
        res.json({
          status: 201,
          message: 'User created',
        });
      }
    });
  },

  login: (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
      if (err) {
        res.json({
          status: 404,
          message: 'User not found',
          err,
        });
      } else {
        const hashedPassword = user.password;
        if (validatePassword(password, hashedPassword).then(res => res)) {
          // Give them a token
          generateToken(req);
          res.json({
            status: 202,
            message: 'Login successful',
          });
        } else {
          res.json({
            status: 401,
            message: 'Unauthorized'
          });
        }
      }
    });
  },

  delete: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    // Will verify the token and return its payload
    const payload = verifyToken(token);

    User.remove({ username: payload.username }, (err, user) => {
      if (err) {
        res.json({
          status: 400,
          message: 'Could not delete user',
          err,
        });
      } else {
        notesController.deleteAllForUser(req, res, next);
        res.json({
          status: 200,
          message: 'User deleted successfully',
        });
      }
    });
  },

};
