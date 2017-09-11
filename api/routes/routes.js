'use strict';
module.exports = function(app) {
  var UserList = require('../controllers/userController');

  // UserList Routes
  app.route('/users')
    .get(UserList.list_all_users)
    .post(UserList.create_user);

  app.route('/users/:userId')
    .get(UserList.read_user)
    .put(UserList.update_user)

  // UserList Routes
  app.route('/users/:userId/tasks')
  .get(UserList.list_all_tasks)
  .post(UserList.create_task);

  app.route('/users/:userId/tasks/:taskId')
    .get(UserList.read_task)
    .put(UserList.update_task)
    .delete(UserList.delete_task);
};
