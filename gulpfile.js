'use strict';
/* istanbul ignore next */
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	toMarkdown = require('gulp-jsdoc-to-markdown');
/* istanbul ignore next */	
gulp.task('create-docs', function(){
	return gulp.src('lib/**/*.js')
		.pipe(concat('api.md'))
		.pipe(toMarkdown())
		.pipe(gulp.dest('./docs'));
});
/* istanbul ignore next */
gulp.task('default', ['create-docs'], function(){});