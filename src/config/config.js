
'use strict';

var appRoot = require('app-root-path');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var colors = require('colors');

var url = require(appRoot + '/src/config/database')();

module.exports = function(app, express) {

// view engine setup
    app.set('views', path.join(appRoot + '/src/views'));
    app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(appRoot + '/src/public')));

    var routes = require(appRoot + '/src/config/routes/index');
    var login = require(appRoot + '/src/config/routes/login')(app);
    var journey = require(appRoot + '/src/config/routes/journey')(app);

    app.use('/', routes);
    app.use('/login', login);
    app.use('/journies', journey);

    mongoose.connect(url, function(err) {
        if (err) {
            console.log('Unable to connect to the db!'.red, err);
        } else {
            console.log('Connect to the db!'.green);
        }
    });

    return app;
};