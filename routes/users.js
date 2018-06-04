const controller = require('../controllers/users');
const validateToken = require('../utils/validateToken');


module.exports = (router) => {
  router.route('/users/:id')
    .get([validateToken, controller.get])
    .put([validateToken, controller.update])
    .delete([validateToken, controller.delete]);

  router.route('/login')
    .post(controller.login, validateToken);

  router.route('/register')
    .post(controller.register);
};
