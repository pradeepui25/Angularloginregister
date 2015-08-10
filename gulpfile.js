/*
var paths = require('./gulp.config.json');

var gulp = require('gulp'),
// get dev server dependencies
    connect = require('gulp-connect'),
//Get dependencies for e2e test cases
    angularProtractor = require('gulp-angular-protractor'),
// Start a standalone server
    webdriver_standalone = angularProtractor.webdriver_standalone,
// Download and update the selenium driver
    webdriver_update = angularProtractor.webdriver_update;


// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', webdriver_standalone);


// Setting up the test task
gulp.task('protractor', function (cb) {
    gulp
        .src(['./test/spec.js'])
        .pipe(angularProtractor({
            'configFile': './test/protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', cb);
});

gulp.task('server', function () {
    connect.server({
        port: 8000,
        livereload: true
    });
});


gulp.task('default', ['server']);



*/
