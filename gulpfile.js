try {
    require('smallilies');
    require('unclog')('p');
    process.title = cwd.split(/[\/\\]+/g).slice(2).reverse().join(' ') + ' - Gulp';
} catch (err) {
    _ = require('lodash');
}

const del        = require('del');
const gulp       = require('gulp');
const gutil      = require('gulp-util');
const babel      = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const changed    = require('gulp-changed-in-place');

gulp.debouncedWatch = (path, task) =>
    gulp.watch(path, _.debounce(task, 2000));

gulp.task('_clean', done =>
    del('lib/**/*', done));

gulp.task('_babel', done =>
    gulp.src('src/**/*.es6')
    .pipe(changed({firstPass: true}))
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['es2015', 'stage-0'] }))
    .pipe(sourcemaps.write('.', {sourceRoot: 'src'}))
    .pipe(gulp.dest('lib')));

gulp.task('_build',
    gulp.series('_clean', '_babel'));

gulp.task('_test', done => {
    try {
        test.kill();
        gutil.log('Test [PID:%s] killed', test.pid);
    } catch (err) {}
    if (yargs.cls || yargs.clear)
        process.stdout.write('\u001b[2J\u001b[0;0H');
    var command = 'node lib/test';
    test = spawn(command, yargs.grep || yargs.tests || yargs.test);
    gutil.log('Test [PID:%s] started', test.pid);
    test.then(() => {
        notify('Smallilies Test', 'finished');
        done();
    }).catch(err => {
        gutil.log('Test error:', err);
        notify('Smallilies Test', 'errored: ' + err);
        done();
    });
});

gulp.task('test',
    gulp.series('_build', '_test'));

gulp.task('_watch', done =>
    gulp.debouncedWatch('src/**/*.es6',
        gulp.series('_babel', '_test')));

gulp.task('default',
    gulp.series('_build',
        gulp.parallel('_watch', '_test')));
