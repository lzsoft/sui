const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const del = require('del');
gulp.task('build', function () {
    gulp.src('./src/**/*.css').pipe(cleanCSS({
        compatibility: '*',
        inline: false
    })).pipe(concat('sui.css')).pipe(gulp.dest('./min/'));
});
gulp.task('clean', function () {
    del('./src/', {
        force: true
    });
});