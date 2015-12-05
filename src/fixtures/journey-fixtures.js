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
                name: 'Cetatuie',
                desc: 'Take a lovely walk thorught Cluj-Napoca finest hills',
                duration: 34,
                distance: 900,
                imgURL: 'http://mw2.google.com/mw-panoramio/photos/medium/4112582.jpg'
            },
            {
                _id: '41224d776a326fb40f000005',
                name: 'Centru vechi',
                desc: 'Enjoy a lovely day in a beautiful old place',
                duration: 20,
                distance: 400,
                imgURL: 'http://static2.libertatea.ro/typo3temp/pics/04-foto-2-1588_9b532b063a.jpg'

            },
            {
                _id: '41224d776a326fb40f000006',
                name: 'Padurea Baciu',
                desc: 'Explore the beautifully haunted Baciu forest.',
                duration: 44,
                distance: 800,
                imgURL: 'http://static2.libertatea.ro/typo3temp/pics/04-foto-2-1588_9b532b063a.jpg'
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
