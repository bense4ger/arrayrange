'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	toMarkdown = require('gulp-jsdoc-to-markdown');
	
gulp.task('create-docs', function(){
	return gulp.src('lib/**/*.js')
		.pipe(concat('api.md'))
		.pipe(toMarkdown())
		.pipe(gulp.dest('./docs'));
});

gulp.task('default', ['create-docs'], function(){});