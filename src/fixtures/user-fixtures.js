/**
 * Created by adrianIoan on 04.12.2015.
 */

/**
 * Created by Adrian on 12/10/15.
 */

'use strict';

var fixtures = require('node-mongoose-fixtures');
var colors = require('colors');

function userFixture(callback) {
    fixtures.save('User', {
        User: [
            {
                _id: '41224d776a326fb40f000001',
                email: 'chirila_adrian1@yahoo.com',
                name: 'Chirila Adrian'
            },
            {
                _id: '41224d776a326fb40f000002',
                email: 'jula_adrian1@yahoo.com',
                name: 'Chirila Jula'
            },
            {
                _id: '41224d776a326fb40f000003',
                email: 'gore@yahoo.com',
                name: 'Gore Brate'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Could not save user-fixtures'.red, err);
        } else {
            fixtures('User', function(err) {
                if (err) {
                    console.log('Could not find user fixtures'.red, err);
                } else {
                    console.log('Found user fixtures into db!'.green);
                }

                return callback(err);
            });
        }
    });
}

module.exports = userFixture;
