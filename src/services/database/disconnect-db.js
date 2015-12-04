/**
 * Created by adrianIoan on 05.12.2015.
 */

'use strict';

var mongoose = require('mongoose');
var appRoot = require('app-root-path').path;

var disconnectDb = function(done) {
    mongoose.disconnect(function(err) {
        if (err) {
            console.log('Unable to close database connection'.red, err);
        } else {
            console.log('Database connection was closed!'.green);
        }

        done(err);
    });
};

module.exports = disconnectDb;
