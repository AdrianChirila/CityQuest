/**
 * Created by adrian on 05.12.2015.
 */
'use strict';

var appRoot = require('app-root-path');
var spotRepository = require(appRoot + '/src/repositories/spot-repository');
var colors = require('colors');

var SpotController = function() {
    var getAllByJourney = function(req, res) {
        spotRepository.getAllByJourney(req.params.id,
            function(err, spots) {
            if (err) {
                console.log('Could not get spots'.red, err);

                return res.status(500).send();
            }
            console.log('The spots were sent!'.green);

            return res.status(200).json(spots);
        });
    };

    var getAllByJourneyAndUser = function(req, res) {
       spotRepository.getAllByJourneyAndUser(req.params.userID,
       req.params.journeyID, function(err, markSpots) {
               if (err) {
                   console.log('Could not get marked spots!'.red, err);

                   return res.status(500).send();
               }
               console.log('The marked spots were sent!'.green);

               return res.status(200).json(markSpots);
           });
    };

    return {
        getAllByJourneyAndUser: getAllByJourneyAndUser,
        getAllByJourney: getAllByJourney
    }
};

module.exports = SpotController();