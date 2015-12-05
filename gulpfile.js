/**
 * Created by adrian on 05.12.2015.
 */

'use strict';

var gulp = require('gulp');
var gulpMocha = require('gulp-mocha');
var env = require('gulp-env');

gulp.task('test',function() {
    env({vars: {ENV: 'test'}});

    return gulp.src('./test/**/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'nyan'}));
});
