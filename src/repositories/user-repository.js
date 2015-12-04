/**
 * Created by adrianIoan on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var colors = require('colors');

var User = require(appRoot + '/src/models/user');

var UserRepository = function() {

    var findByEmail = function(email, callback) {
        User.find({email: email}, function(err, user) {
            if (err) {
                console.log('Could not find user(server error)'.red, err);

                return callback(err, null);
            }

            if (!user) {
                console.log('The user does not exist'.red);

                return callback(null, null);
            }
            console.log('The user was found!'.green);

            return callback(null, err);
        });
    };

    var add = function(user, callback) {
        findByEmail(user.email, function(err, dbUser) {
            if (err) {
                return callback(err, null);
            }

            if (!dbUser) {
                user.save(function(err) {
                    if (err) {
                        console.log('Could not save the user!'.red, err);

                        return callback(err, null);
                    }
                    console.log('The user was saved!'.green);

                    return callback(null, user);
                });
            }

            return callback(null, user);
        });
    };

    return {
        add: add
    }
};

module.exports = UserRepository();
