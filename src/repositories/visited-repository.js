/**
 * Created by adrian on 06.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var Visited = require(appRoot + '/src/models/visited');
var colors = require('colors');

var VisitedRepository = function() {
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

    return {
        getAllByUser: getAllByUser
    }
};

module.exports = VisitedRepository();