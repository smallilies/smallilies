const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');

gulp.task('clean', done =>
    del('lib', done));

gulp.task('babel', done =>
    gulp.src('src/**/*.js')
    .pipe(babel({
        presets: ['es2015', 'stage-0']
    }))
    .pipe(gulp.dest('lib')));

gulp.task('default', gulp.series('clean', 'babel'));