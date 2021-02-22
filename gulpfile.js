'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('roboto', function () {
  return gulp.src(['node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff',
    'node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff',
    'node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff'
    ])
    .pipe(gulp.dest('./fonts'));
});
