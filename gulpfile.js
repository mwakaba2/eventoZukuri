'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
