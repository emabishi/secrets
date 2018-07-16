// Interacts with database and gets values/params from requests through the router
const validatePassword = require('../utils/validatePassword');
const generateToken = require('../utils/generateToken');
const verifyToken = require('../utils/verifyToken');

const User = require('../models/users');

function getPayloadFromToken(req) {
  const token = req.headers.authorization.split(' ')[1];
  // Will verify the token and return its payload
  return verifyToken(token);
}

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
        res.status(400).send({
          message: `Error ${err.code} ${err}`,
        });
      } else {
        generateToken(req).then(token => 
          res.status(201).send({
            message: 'User created',
            user,
            token
          }), err => res.status(201).send({ err }));
      }
    });
  },

  login: (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
      if (err) {
        res.status(400).send({
          err,
        });
      } else if(!user) {
        res.status(404).send({
          message: 'User not found'
        });
      } else {
        const hashedPassword = user.password;
        if (validatePassword(password, hashedPassword).then(res => res)) {
          // Give them a token
          // generateToken(req);
          // const token = req.headers.authorization.split(' ')[1];

          generateToken(req).then(token =>
            res.status(202).send({
              message: 'Successful login',
              user,
              token
            }), err => res.status(201).send({
              err
            }));
        } else {
          res.status(401).send({
            message: 'Unauthorized'
          });
        }
      }
    });
  },

  deleteOne: (req, res, next) => {
    const payload = getPayloadFromToken(req);
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (payload.username === user.username) {
        if (err) {
          res.status(400).send({
            message: 'Could not delete user',
            err,
          });
        } else {
          // notesController.deleteAllForUser(req, res, next); // TODO:delete all notes for the user if they exist
          res.status(200).send({
            user,
            message: 'User deleted successfully',
          });
        }
      } else {
        res.status(401).send({
          message: 'Unauthorized',
        });
      }
    });
  },

  getOne: (req, res, next) => {
    const payload = getPayloadFromToken(req);
    User.findById(req.params.id, (err, user) => {
      if (payload.username === user.username) {
        if (err) {
          // You're either unauthorized or the user doesn't exist
          res.status(404).send({
            message: 'Could not find user',
            err,
          });
        } else {
          res.json({
            status: 200,
            user,
          });
        }
      } else {
        res.status(401).send({
          message: 'Unauthorized',
        });
      }
    });
  },

  update: (req, res, next) => {
    const payload = getPayloadFromToken(req);
    User.findById(req.params.id , (err, user) => {
      if (err) {
        res.status(404).send({
          message: 'Could not find user',
          err,
        });
      } else {
        if (user.username === payload.username) {
          const { username, name, password, email } = req.body;
          if (username) { user.username = username; }
          if (name) { user.name = name; }
          if (password) { user.password = password; }
          if (email) { user.email = email; }

          user.save((err, updatedUser) => {
            if (err) {
              res.status(400).send({
                message: 'Error updating user',
                err
              });
            } else {
              // Give them a new token
              generateToken(req);
              res.status(200).send({
                user: updatedUser
              });
            }
          });
        } else {
          res.status(401).send({
            message: 'Unauthorized'
          });
        }
      }
    });
  }

};
