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
                info: 'Cluj-Napoca best view',
                imgUrl: 'http://www.primariaclujnapoca.ro/userfiles/images/T-3_6_cetatuia_01.jpg',
                name: 'Cetatuie view'
            },
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
            },
            {
                journeyID: '41224d776a326fb40f000005',
                lat: 46.770594,
                long:  23.597178,
                radius: 5,
                info: 'National Theater of Cluj-Napoca',
                imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Teatrul_National_-_Cluj.jpg',
                name: 'National Theater'
            },
            {
                journeyID: '41224d776a326fb40f000005',
                lat: 46.767022,
                long: 23.586069,
                radius: 5,
                info: 'National Students Building of Cluj-Napoca',
                imgUrl: 'http://ziuadecj.realitatea.net/Images/Articole/00050212/00023382_large.jpg',
                name: 'Students Building'
            },
            {
                journeyID: '41224d776a326fb40f000005',
                lat: 46.762528,
                long: 23.588987,
                radius: 5,
                info: 'Botanical Garden of Cluj Napoca',
                imgUrl: 'http://s19.postimg.org/tlbjizm9v/gradina_botanica0002.jpg',
                name: 'Botanical Garden'
            },
            {
                journeyID: '41224d776a326fb40f000006',
                lat: 46.775853,
                long: 23.604336,
                radius: 5,
                info: 'The Office building',
                imgUrl: 'http://seto-cluj.ro/wp-content/uploads/2015/08/The-Office-2.jpg',
                name: 'The Office building'
            },
            {
                journeyID: '41224d776a326fb40f000006',
                lat: 46.774134,
                long: 23.622887,
                radius: 5,
                info: 'Iuliuss Mall park',
                imgUrl: 'http://www.iuliusmall.com/uploads/evenimente/9/3499.jpg',
                name: 'Iuliuss Park'
            },
            {
                journeyID: '41224d776a326fb40f000006',
                lat: 46.771836,
                long: 23.625321,
                radius: 5,
                info: 'Iuliuss Mall Cluj-Napoca',
                imgUrl: 'http://www.ziardecluj.ro/sites/default/files/media/image/2014/10/iulius_mall_cluj1_0.jpg',
                name: 'Iuliuss Mall'
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
