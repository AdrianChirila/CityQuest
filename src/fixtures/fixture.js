/**
 * Created by adrianIoan on 04.12.2015.
 */
/**
 * Created by Adrian on 12/10/15.
 */

'use strict';

var async = require('async');
var appRoot = require('app-root-path').path;

var userFixtures = require(appRoot + '/src/fixtures/user-fixtures');
var journeyFixtures = require(appRoot + '/src/fixtures/journey-fixtures');
var spotFixtures = require(appRoot + '/src/fixtures/spot-fixtures');
var visitedFixtures = require(appRoot + '/src/fixtures/visited-fixtures');

var saveFixtures = function(callback) {
    async.waterfall([
        userFixtures,
        journeyFixtures,
        spotFixtures,
        visitedFixtures
    ], callback);
};

module.exports = saveFixtures;
