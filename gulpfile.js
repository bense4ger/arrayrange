'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	toMarkdown = require('gulp-js-doc-to-markdown');
	
gulp.task('create-docs', function(){
	return gulp.src('lib/**/*.js')
		.pipe(concat('api.md'))
		.pipe(toMarkdown())
		.pipe('./docs');
});

gulp.taks('default', ['create-docs'], function(){});