/**
 * Created by adrian on 05.12.2015.
 */

/**
 * Created by adrianIoan on 04.12.2015.
 */

'use strict';

var fixtures = require('node-mongoose-fixtures');
var colors = require('colors');

function userFixture(callback) {
    fixtures.save('Journey', {
        Journey: [
            {
                _id: '41224d776a326fb40f000004',
                name: 'Vila 69',
                desc: 'Go to vila 69',
                duration: 34,
                distance: 900
            },
            {
                _id: '41224d776a326fb40f000005',
                name: 'Road to booha',
                desc: 'get a beer at booha bar',
                duration: 20,
                distance: 400
            },
            {
                _id: '41224d776a326fb40f000006',
                name: 'Go to Noa',
                desc: 'Have fun at noa',
                duration: 44,
                distance: 800
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Could not save journey-fixtures'.red, err);
        } else {
            fixtures('Journey', function(err) {
                if (err) {
                    console.log('Could not find journey fixtures'.red, err);
                } else {
                    console.log('Found journey fixtures into db!'.green);
                }

                return callback(err);
            });
        }
    });
}

module.exports = userFixture;
