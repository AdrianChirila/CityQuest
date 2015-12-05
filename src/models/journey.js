/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var JourneySchema = new Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    },
    imgURL: {
      type: String
    }
});

module.exports = mongoose.model('Journey', JourneySchema);