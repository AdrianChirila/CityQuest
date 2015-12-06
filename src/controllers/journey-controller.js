/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var journeyRepository = require(appRoot + '/src/repositories/journey-repository');
var Journey = require(appRoot + '/src/models/journey');
var colors = require('colors');

var userController = function() {

    var getAll = function(req, res) {
        journeyRepository.getAll(function(err, journies) {
            if (err) {
                console.log('Server error!'.red, err);

                return res.status(500).send();
            }
            console.log('The journies were sent!'.green);

            return res.status(200).json(journies);
        });
    };

    return {
        getAll: getAll
    }
};

module.exports = userController();
