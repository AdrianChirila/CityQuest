/**
 * Created by adrian on 06.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var visitedRepository = require(appRoot +
    '/src/repositories/visited-repository');

var VisitedController = function() {
    var getAllByUser = function(req, res) {
        visitedRepository.getAllByUser(req.params.id,
            function(err, spots) {
            if (err) {
                console.log('Could not get the spots by user'.red, err);

                return res.status(500).send();
            }
            console.log('The visited spots were sent'.green);

            return res.status(200).send(spots);
        });
    };

    return {
        getAllByUser: getAllByUser
    }
};

module.exports = VisitedController();