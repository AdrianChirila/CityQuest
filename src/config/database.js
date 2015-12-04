/**
 * Created by adrianIoan on 04.12.2015.
 */
'use strict';

var appRoot = require('app-root-path').path;

var params = require(appRoot + '/src/config/parameters.js');

var configUrl = function() {
    var url = null;

    if (process.env.ENV === 'test') {
        url = params.databaseUrlTest;
    } else {
        url = params.databaseUrl;
    }

    return url;
};

module.exports = configUrl;