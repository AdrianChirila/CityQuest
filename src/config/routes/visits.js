/**
 * Created by adrian on 06.12.2015.
 */

var appRoot = require('app-root-path');
var express = require('express');
var router = express.Router();

var visitController = require(appRoot + '/src/controllers/visit-controller');

module.exports = function() {
    router.post('/', visitController.add);

    return router;
};