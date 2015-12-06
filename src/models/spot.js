/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var SpotSchema = new Schema({
    journeyID: {
        type: ObjectId,
        ref: 'Journey'
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },
    radius: {
        type: Number
    },
    info: {
        type: String
    },
    imgUrl: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Spot', SpotSchema);