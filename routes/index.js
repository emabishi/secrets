const users = require('./users');
const notes = require('./notes');

module.exports = (router) => {
  users(router);
  notes(router);
  return router;
};