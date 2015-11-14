const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const changed = require('gulp-changed-in-place');

gulp.task('clean', done =>
    del('lib', done));

gulp.task('babel', done =>
    gulp.src('src/**/*.es6')
    .pipe(changed({firstPass: true}))
    .pipe(babel({
        presets: ['es2015', 'stage-0']
    }))
    .pipe(replace(/(\/\/ )?["']use strict['"];?([\n\r]+)?/g, ''))
    .pipe(gulp.dest('lib')));

gulp.task('build', gulp.series('babel'));

gulp.task('watch', done =>
    gulp.watch('src/**/*.es6', gulp.series('build')));

gulp.task('default', gulp.series('clean', 'build', 'watch'));
