/**
 * Author:   www.liumapp.com 
 * Email:    liumapp.com@gmail.com
 */
'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var del = require('del');
var uglify = require('gulp-uglify');
//var gulpCopy = require('gulp-file-copy')

gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less().on('error', gutil.log))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('js', function() {
    return gulp.src('src/js/*.js').pipe(concat('starComment.js')).pipe(gulp.dest('dist/js/'));
});

gulp.task('image', function() {
    del([
        'dist/images/*'
    ]);
    gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images/').on('error', gutil.log));
});


gulp.task('watch', function() {
    gulp.watch([
        'src/less/**.less',
        'src/less/**/*.less'
    ], ['less']);
    gulp.watch([
        'src/js/**.js'
    ], ['js']);
    gulp.watch([
        'src/images/*'
    ], ['image']);

});


gulp.task('default', ['js', 'less', 'image', 'watch']);