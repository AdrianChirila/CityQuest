var appRoot = require('app-root-path');
var express = require('express');
var router = express.Router();

var userController = require(appRoot + '/src/controllers/user-controller');

module.exports = function() {
  router.post('/', userController.add);

  return router;
};