/**
 * Created by adrianIoan on 05.12.2015.
 */

var appRoot = require('app-root-path');
var userRepository = require(appRoot + '/src/repositories/user-repository');
var User = require(appRoot + '/src/models/user');

var UserController = function() {
    var add = function(req, res) {
        user = new User(req.body.user);
        userRepository.add(user, function(err, user) {
            if (err) {
                console.log('Could not login the user!'.red, err);

                return res.status(500).send();
            }
            console.log('The user was log in!'.green);

            return res.status(200).send(user);
        });
    };

    return {
        add: add
    }
};

module.exports = UserController();