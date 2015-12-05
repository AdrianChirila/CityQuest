/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var express = require('express');
var router = express.Router();

var visitedController =
    require(appRoot + '/src/controllers/visited-controller');

var spotController =
    require(appRoot + '/src/controllers/spot-controller');

module.exports = function() {
    router.get('/journey/:id', spotController.getAllByJourney);

    router.get('/users/:id', visitedController.getAllByUser);
    return router;
};