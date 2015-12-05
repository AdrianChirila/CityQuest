/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var express = require('express');
var router = express.Router();

var journeyController =
    require(appRoot + '/src/controllers/journey-controller');

module.exports = function() {
    router.get('/', journeyController.getAll);

    return router;
};