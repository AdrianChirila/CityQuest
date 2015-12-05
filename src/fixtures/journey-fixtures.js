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
                name: 'Botanical Garden',
                desc: 'Enjoy some fresh air in a beautiful place',
                duration: 20,
                distance: 400,
                imgURL: 'http://calatorim.ro/wp-content/uploads/2014/07/main.jpg'
            },
            {
                _id: '41224d776a326fb40f000006',
                name: 'Iuliuss Mall Cluj-Napoca',
                desc: 'Spend some free time at shopping',
                duration: 44,
                distance: 800,
                imgURL: 'http://www.monitorulcj.ro//documente/stories/2015/04/08/Iulius%20Mall%20Cluj%2002.jpg'
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
