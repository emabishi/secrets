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
        if (err) {
          res.json({
            status: 409,
            message: err.code,
          });
        } else {
          generateToken(req);
          res.json({
            status: 201,
            message: 'User created',
          });
        }
      }
    });
  },

  login: (req, res, next) => {
    // Assume they have a valid token because if they're here, the validate token middleware passed
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
        if (validatePassword(password, hashedPassword)) {
          // Give them a token
          if (generateToken(req)) {
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
    // Decode the token to retrieve the username
    const token = req.headers.authorization;
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
