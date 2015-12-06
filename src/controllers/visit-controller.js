/**
 * Created by adrian on 06.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var visitedRepository = require(appRoot +
    '/src/repositories/visit-repository');
var Visit = require(appRoot + '/src/models/visit');

var VisitedController = function() {
    var getAllByUser = function(req, res) {
        visitedRepository.getAllByUser(req.params.id,
            function(err, spots) {
            if (err) {
                console.log('Could not get the spots by user'.red, err);

                return res.status(500).send();
            }
            console.log('The visited spots were sent'.green);

            return res.status(200).json(spots);
        });
    };

    var add = function(req, res) {
        console.log(req.body);
        var visit = new Visit({
            userID: req.body.userID,
            spotID: req.body.spotID
        });

        visitedRepository.add(visit, function(err, visitDb) {
            if (err) {
                console.log('Could not save the visit!'.red, err);

                return res.status(500).send();
            }

            return res.status(200).json(visitDb);
        });
    };

    return {
        add: add,
        getAllByUser: getAllByUser
    }
};

module.exports = VisitedController();