/**
 * Created by adrianIoan on 04.12.2015.
 */

/**
 * Created by Adrian on 12/10/15.
 */

'use strict';

var appRoot = require('app-root-path').path;

require(appRoot + '/src/services/database/clear-save-db')(function(err) {
    if (err) {
        console.log('Could not import data into db'.red, err);

        return process.exit(1);
    }
    console.log('Done!'.green);

    return process.exit(0);
});
