const controller = require('../controllers/notes');
const validateToken = require('../utils/validateToken');

module.exports = (router) => {
  router.route('/notes/:note_id')
    .get([validateToken(), controller.getNoteById])
    .put([validateToken(), controller.updateNoteById])
    .delete([validateToken(), controller.deleteNoteById]);

  router.route('/notes')
    .post([validateToken(), controller.create])
    .get([validateToken(), controller.getAll]);
};
