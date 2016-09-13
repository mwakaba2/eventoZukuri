/*eslint-env node */
'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
  gulp.task('default', [ 'serve' ]);
} else {
  gulp.task('default', [ 'serve:dist' ]);
}
