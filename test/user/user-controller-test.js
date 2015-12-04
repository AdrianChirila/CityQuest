/**
 * Created by adrianIoan on 05.12.2015.
 */

'use strict';

var appRoot = require('app-root-path').path;
var supertest = require('supertest');
var expect = require('chai').expect;

var initDb = require(appRoot + '/src/services/database/clear-save-db');
var disconnectDb = require(appRoot + '/src/services/database/disconnect-db');

describe('User controoler test', function() {
    var api;

    beforeEach(function(done) {
        api = supertest('http://localhost:3000');
        initDb(done);
    });

    afterEach(function(done) {
        disconnectDb(done);
    });

    it('login an user', function(done) {
        api.get('/login')
            .send({
                user: {
                    email: 'calin_gabriel@yahoo.com',
                    name: 'Calin Gabriel'
                }
            })
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body.email).to.equal(
                    'calin_gabriel@yahoo.com');
                expect(res.body.name).to.equal(
                    'Calin Gabriel'
                );

                return done();
            });
    });
});
