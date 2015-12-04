/**
 * Created by adrianIoan on 04.12.2015.
 */
/**
 * Created by Adrian on 09/10/15.
 */

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
