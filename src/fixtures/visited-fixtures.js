/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var fixtures = require('node-mongoose-fixtures');
var colors = require('colors');

function userFixture(callback) {
    fixtures.save('Visit', {
        Visit: [
            {
                userID: '41224d776a326fb40f000001',
                spotID: '41224d776a326fb40f000023'
            },
            {
                userID: '41224d776a326fb40f000001',
                spotID: '41224d776a326fb40f000024'
            },
            {
                userID: '41224d776a326fb40f000002',
                spotID: '41224d776a326fb40f000028'
            },
            {
                userID: '41224d776a326fb40f000002',
                spotID: '41224d776a326fb40f000029'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Could not save visit-fixtures'.red, err);
        } else {
            fixtures('Visit', function(err) {
                if (err) {
                    console.log('Could not find visit spots fixtures'.red, err);
                } else {
                    console.log('Found visit spots fixtures into db!'.green);
                }

                return callback(err);
            });
        }
    });
}

module.exports = userFixture;
