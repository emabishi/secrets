const Note = require('../models/notes');
const User = require('../models/users');

const getPayloadFromToken = require('../utils/getPayloadFromToken');
const errorHandler = require('../utils/errorHandler');

module.exports = {
  create: (req, res, next) => {
    const { title, text } = req.body;
    const payload = getPayloadFromToken(req);
    console.log('payload', payload.username);
    User.findOne({ username: payload.username }, (err, user) => {
      if (err) {
        res.status(404).send({
          message: 'Could not find user',
          err
        });
      } else {
        console.log('User', user);
        const note = new Note({ title, text, author: user._id });
        note.save((err, updatedNote) => {
          if (err) {
            res.status(400).send({
              message: 'Unable to create note',
              err
            });
          } else {
            res.status(201).send({
              message: 'Note created',
              note: updatedNote
            });
          }
        });
      }
    });
  },

  getNoteById: (req, res, next) => {
    Note.findById(req.params.id, (err, note) => {
      if (err) {
        errorHandler(res, 404, err);
      } else {
        if (note) {
          res.status(200).send({
            note
          });
        } else {
          errorHandler(res, 404);
        }
      }
    });
  },

  getAllForUser: (req, res, next) => {
    const payload = getPayloadFromToken(req);
    User.findOne({ username: payload.username }, (err, user) => {
      console.log('User >>>', user);
      if (err) {
        errorHandler(res, 404, err);
      } else {
        Note.find({ author: user._id }, (err, notes) => {
          if (err) {
            errorHandler(res, 404, err);
          } else {
            res.status(200).send({
              notes
            });
          }
        });
      }
    });
  },

  update: (req, res, next) => {
    Note.findById(req.params.id, (err, note) => {
      if (err) {
        errorHandler(res, 404, err);
      } else {
        const { title, text } = req.body;
        if (title) { note.title = title; }
        if (title) { note.text = text; }
        note.save((err, updatedNote) => {
          if (err) {
            errorHandler(res, 400, err);
          } else {
            res.status(200).send({
              message: 'Note updated',
              note: updatedNote
            });
          }
        });
      }
    });
  },
  
  deleteAllForUser: (req, res, next) => {
    const payload = getPayloadFromToken(req);
    const username = payload.username;
    User.findOne({ username }, (err, user) => {
      if (err) {
        errorHandler(res, 404, err);
      } else {
        Note.remove({ author: user._id }, (err, notes) => {
          if (err) {
            errorHandler(res, 400, err);
          } else {
            res.status(200).send({
              message: 'Notes deleted',
              // success: notes.isDeleted(),
              notes,
            });
          }
        });
      }
    });
  },

  delete: (req, res, next) => {
    Note.findByIdAndDelete(req.params.id, (err, note) => {
      if (err) {
        errorHandler(res, 400, err);
      } else {
        res.status(200).send({
          message: 'Note deleted',
          // success: note.isDeleted()
          note,
        });
      }
    });
  }
};
