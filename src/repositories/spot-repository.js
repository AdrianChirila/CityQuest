/**
 * Created by adrian on 05.12.2015.
 */
'use strict';

var appRoot = require('app-root-path');
var Spot = require(appRoot + '/src/models/spot');

var SpotRepository = function() {
    var getAllByJourney = function(id, callback) {
        Spot.find({ journeyID: id }, function(err, journies) {
            if (err) {
                console.log('Could not find journey'.red, err);

                return callback(err, null);
            }

            if (journies.length === 0) {
                console.log('There is no journey!'.yellow);
            }

            return callback(null, journies);
        });
    };

    return {
        getAllByJourney: getAllByJourney
    }
};

module.exports = SpotRepository();