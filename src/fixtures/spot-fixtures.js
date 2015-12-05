/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var fixtures = require('node-mongoose-fixtures');
var colors = require('colors');

function userFixture(callback) {
    fixtures.save('Spot', {
        Spot: [
            {
                journeyID: '41224d776a326fb40f000004',
                lat: 46.773586,
                long: 23.581645,
                radius: 5,
                info: 'View National Area Stadium!',
                imgUrl: 'http://www.presalocala.com/wp-content/uploads/2011/09/397945-cluj-arena.jpg',
                name: 'National Area Stadium!'
            },
            {
                journeyID: '41224d776a326fb40f000004',
                lat: 46.774347,
                long:  23.589521,
                radius: 5,
                info: 'Mihai Viteazu Statue',
                imgUrl: 'http://www.cotidiantr.ro/dbimg/stiri/42814/main.jpg',
                name: 'Mihai Viteazu Venue'
            },
            {
                journeyID: '41224d776a326fb40f000004',
                lat: 46.769426,
                long:  23.589955,
                radius: 5,
                info: 'Mayas Rex statue and Saint Mihali church',
                imgUrl: 'http://www.cazareclujnapoca.ro/blog/wp-content/uploads/2013/12/piata-unirii-cluj-napoca.jpg',
                name: 'City Center'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Could not save journey-fixtures'.red, err);
        } else {
            fixtures('Spot', function(err) {
                if (err) {
                    console.log('Could not find spot fixtures'.red, err);
                } else {
                    console.log('Found spot fixtures into db!'.green);
                }

                return callback(err);
            });
        }
    });
}

module.exports = userFixture;
