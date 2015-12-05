/**
 * Created by adrianIoan on 04.12.2015.
 */
/**
 * Created by Adrian on 12/10/15.
 */

'use strict';

var async = require('async');
var appRoot = require('app-root-path').path;

var userFixture = require(appRoot + '/src/fixtures/user-fixtures');
var journeyFixture = require(appRoot + '/src/fixtures/journey-fixtures');

var saveFixtures = function(callback) {
    async.waterfall([
        userFixture,
        journeyFixture
    ], callback);
};

module.exports = saveFixtures;
