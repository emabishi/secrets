const controller = require('../controllers/users');
const validateToken = require('../utils/validateToken');


module.exports = (router) => {
  router.route('/users/:user_id')
    .get([validateToken(), controller.getUserById])
    .put([validateToken(), controller.updateUserById])
    .delete([validateToken(), controller.deleteUserById]);

  router.route('/login')
    .post([validateToken(), controller.create]);

  router.route('/register')
    .post(controller.register);
};
