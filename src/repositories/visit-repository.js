/**
 * Created by adrian on 06.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var Visited = require(appRoot + '/src/models/visit');
var colors = require('colors');

var VisitRepository = function() {
    var getAllByUser = function(id, callback) {
        Visited.find({userID: id})
            .populate('spotID')
            .exec(function(err, visits) {
                if (err) {
                    console.log('Cannot populate'.red, err);

                    return callback(err, null);
                }

                return callback(null, visits);
            });

        return
    };

    var find = function(userID, spotID, callback) {
        Visited.find({userID: userID, spotID:spotID},
            function(err, visits) {
                if (err) {
                    return callback(err, null);
                }

                if (visits.length === 0) {
                    return callback(null, null);
                }
                console.log('The user already mark the visit!'.yellow);

                return callback(null, visits[0]);
            });
    };

    var add = function(visit, callback) {
        find(visit.userID, visit.spotID,
        function(err, visitDb) {
            if (err) {
                return callback(err, null);
            }

            if (!visitDb) {
                visit.save(function(err) {
                    if (err) {
                        console.log('Could not save the visit!'.red);

                        return callback(err, null);
                    }
                    console.log('The visit was saved!'.green);

                    return callback(null, visit);
                });

                return
            }

            return callback(null, visitDb);
        });
    };

    return {
        add: add,
        getAllByUser: getAllByUser,
        find: find
    }
};

module.exports = VisitRepository();