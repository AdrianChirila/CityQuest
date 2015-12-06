/**
 * Created by adrian on 05.12.2015.
 */
'use strict';

var appRoot = require('app-root-path');
var Spot = require(appRoot + '/src/models/spot');
var async = require('async');
var visitRepository = require(appRoot + '/src/repositories/visit-repository');
var ObjectId = require('mongoose').Types.ObjectId;

var SpotRepository = function() {
    var getAllByJourney = function(id, callback) {
        Spot.find({ journeyID: id}, function(err, journies) {
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

    var getAllByJourneyAndUser = function(userID,
        journeyID, callback) {
        getAllByJourney(journeyID,
        function(err, spots) {
            if (err) {
                return callback(err, null);
            }

            var markSpots = [];
            async.each(spots, function(spot, callback) {
                visitRepository.find(userID, spot._id,
                function(err, visit) {
                    if (err) {
                        return callback(err)
                    }

                    var markSpot = {
                        spot: spot,
                        visited: true
                    };

                    if (visit === null ) {
                        markSpot.visited = false;
                    }

                    markSpots.push(markSpot);
                    return callback(err);
                });
            }, function(err) {
                if (err) {
                    return callback(err, null);
                }
                console.log('The marked spots were computed'.green);

                return callback(null, markSpots);
                });
        });
    };
    return {
        getAllByJourneyAndUser: getAllByJourneyAndUser,
        getAllByJourney: getAllByJourney
    }
};

module.exports = SpotRepository();