/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path');
var userRepository = require(appRoot + '/src/repositories/user-repository');
var User = require(appRoot + '/src/models/user');
var colors = require('colors');

var userController = function() {

    var add = function(req, res) {
        console.log(req.body);
        console.log(req.body.email, req.body.name);
        var user = new User({
            email: req.body.email,
            name: req.body.name
        });

        userRepository.add(user, function(err, user) {
            if (err) {
                console.log('ERROR'.red, err);

                res.status(500).send();
            }
            console.log('THe user was sent'.green, user);

            res.status(200).json(user);
        });
    };

    return {
        add: add
    }
};

module.exports = userController();