require('unclog')('p');
process.title = cwd.split(/[\/\\]+/g).slice(2).reverse().join(' ') + ' - Gulp';
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed-in-place');

gulp.task('clean', done =>
    del('lib/**/*', done));

gulp.task('babel', done =>
    gulp.src('src/**/*.es6')
    .pipe(changed({firstPass: true}))
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['es2015', 'stage-0'] }))
    .pipe(sourcemaps.write('.', {sourceRoot: 'src'}))
    .pipe(gulp.dest('lib')));

gulp.task('build', gulp.series('babel'));

gulp.task('watch', done =>
    gulp.watch('src/**/*.es6', gulp.series('build')));

gulp.task('default', gulp.series('clean', 'build', 'watch'));
