'use strict';
var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var stylePath = path.join(__dirname, 'style/*.less');
var scriptPath = [
    'scripts/app.js',
    'scripts/actions/*.js',
    'scripts/components/*.js',
    'scripts/dispatcher/*.js',
    'scripts/stores/*.js',
    'scripts/constants/*.js'
];
var scriptLibPath = [ ];

gulp.task('copy', function() {
    return gulp.src(['style/font/*', 'style/img/*'], { 'base': 'style' })
        .pipe(gulp.dest('source/css'))
});

gulp.task('style', ['copy'], function() {
    return gulp.src(stylePath)
        .pipe(less())
        .pipe(concatCss('css/app.css'))
        .pipe(gulp.dest(path.join(__dirname, 'source/')));
});

gulp.task('libs', function() {
    return gulp.src(scriptLibPath)
        .pipe(concat('libs.min.js'))
        .pipe(uglify({
            output: {
                comments: function(n, comment){
                    return comment.type === 'comment2'
                }
            },
            compress: false,
            mangle: false
        }))
        .pipe(gulp.dest(path.join(__dirname, 'source/js')));
});

gulp.task('script', function() {
    return browserify(path.join(__dirname, 'scripts/app.js')).bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('source/js'))
});

gulp.task('default', ['libs', 'style', 'script']);

gulp.task('watch', ['default'], function(){
    gulp.watch(stylePath, ['style']);
    gulp.watch(scriptPath, ['script']);
});
