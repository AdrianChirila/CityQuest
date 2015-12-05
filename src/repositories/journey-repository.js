/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var Journey = require(appRoot + '/src/models/journey');
var colors = require('colors');

var JourneyRepository = function() {
    var getAll = function(callback) {
        Journey.find({}, function(err, journey) {
            if (err) {
                return callback(err, null);
            }
            console.log('The journey were found!'.green);

            return callback(null, journey);
        });
    };

    return {
        getAll: getAll
    }
};

module.exports = JourneyRepository();
