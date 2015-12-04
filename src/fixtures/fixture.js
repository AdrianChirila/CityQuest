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

var saveFixtures = function(callback) {
    async.waterfall([
        userFixture
    ], callback);
};

module.exports = saveFixtures;
