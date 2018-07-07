const controller = require('../controllers/users');
const validateToken = require('../utils/validateToken');


module.exports = (router) => {
  router.route('/users/:id')
    .get([validateToken, controller.getOne])
    .put([validateToken, controller.update])
    .delete([validateToken, controller.deleteOne]);

  router.route('/login')
    .post(controller.login, validateToken);

  router.route('/register')
    .post(controller.register);
};
