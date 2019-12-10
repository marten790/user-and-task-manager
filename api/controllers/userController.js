'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  Task = mongoose.model('Tasks');

//Manage Users
exports.list_all_users = function (req, res) {

  console.log('listing all users')
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_user = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_user = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_user = function (req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

//Manage tasks for user
exports.list_all_tasks = function (req, res) {
  User.findOne({ _id: req.params.userId }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task.tasks);
  });
};

exports.create_task = function (req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);

    task.tasks.push(req.body);
    res.json(task);
    task.save(function (err) {
      if (err) return handleError(err)
    });
  });
};

exports.read_task = function (req, res) {
  User.findOne({ _id: req.params.userId }, function (err, task) {
    if (err)
      res.send(err);
    var taskById = task.tasks.id(req.params.taskId);
    res.json(taskById);
  });
};
exports.update_task = function (req, res) {
  User.findById({ _id: req.params.userId }, function (err, task) {
    if (err)
      res.send(err);
    var taskObject = task.tasks.id(req.params.taskId);
    taskObject.set(req.body);
    task.save(function (err) {
      if (err) return handleError(err)
    });
    res.json(task);
  });
};

exports.delete_task = function (req, res) {
  User.findById({ _id: req.params.userId }, function (err, task) {
    if (err)
      res.send(err);
    var taskObject = task.tasks.id(req.params.taskId).remove();
    task.save(function (err) {
      if (err) return handleError(err)
    });
    res.json(task);
  })
};
