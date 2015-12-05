/**
 * Created by adrian on 05.12.2015.
 */

var appRoot = require('app-root-path');
var User = require(appRoot + '/src/models/user');
var colors = require('colors');

var userRepository = function() {


    var findByEmail = function(email, callback) {
        User.find({email: email}, function(err, user) {
            if (err) {
                console.log('Could not find user!'.red);

                return callback(err, null);
            }

            if (user.length === 0) {
                console.log('The user does not exist!'.red);

                return callback(null, null);
            }

            console.log('THe user was found!'.green);

            return callback(null, user[0]);
        });
    };

    var add = function(user, callback) {

        findByEmail(user.email, function(err, userDb) {
            if (err) {
                return callback(err, null);
            }

            if (!userDb) {
                user.save(function(err) {
                    if (err) {
                        console.log('Could not save the user!'.red);

                        return callback(err, null);
                    }

                    console.log('The user was saved!'.green, user);

                    return callback(null, user);
                });

                return
            }

            return callback(null, user);
        });
    };

    return {
        add: add
    }
};

module.exports = userRepository();