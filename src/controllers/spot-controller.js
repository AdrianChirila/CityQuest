/**
 * Created by adrian on 05.12.2015.
 */
'use strict';

var appRoot = require('app-root-path');
var spotRepository = require(appRoot + '/src/repositories/spot-repository');
var colors = require('colors');

var SpotController = function() {
    var getAllByJourney = function(req, res) {
        console.log(req.params.id);
        spotRepository.getAllByJourney(req.params.id,
            function(err, spots) {
            if (err) {
                console.log('Could not get spots'.red, err);

                return res.status(500).send();
            }
            console.log('The spots were sent!'.green);

            return res.status(200).send(spots);
        });
    };

    return {
        getAllByJourney: getAllByJourney
    }
};

module.exports = SpotController();