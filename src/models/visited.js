/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var VisitedSchema = new Schema({
    userID: {
        type: ObjectId,
        ref: 'User'
    },
    spotID: {
        type: ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Visited', VisitedSchema);