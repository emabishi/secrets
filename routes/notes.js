const controller = require('../controllers/notes');
const validateToken = require('../utils/validateToken');
const validatePermission = require('../utils/validatePermission');

module.exports = (router) => {
  router.route('/notes/:id')
    .get([validateToken, validatePermission, controller.getNoteById])
    .put([validateToken, validatePermission, controller.update])
    .delete([validateToken, validatePermission, controller.delete]);
    
  router.route('/notes')
    .post([validateToken, controller.create])
    .get([validateToken, validatePermission, controller.getAllForUser])
    .delete([validateToken, validatePermission, controller.deleteAllForUser]);
};
