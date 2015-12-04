/**
 * Created by adrianIoan on 05.12.2015.
 */
/**
 * Created by Adrian on 07/10/15.
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
