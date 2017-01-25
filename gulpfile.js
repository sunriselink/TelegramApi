var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var version = require('./package.json').version;
var about = require('fs')
    .readFileSync('./.files/about.txt', 'utf8')
    .replace('{VERSION}', version);

gulp.task('clean', function() {
    gulp.src([
        'example/js',
        'dist/'
    ])
        .pipe($.clean({force: true}));
});

gulp.task('js', function() {
    gulp.src([
        'node_modules/long/dist/long.min.js',
        'node_modules/zlibjs/bin/gunzip.min.js',
        'node_modules/rusha/rusha.min.js',
        'node_modules/ioc-js/dist/ioc-js.min.js',

        'src/vendor/**/*.js',
        'src/js/**/*.js',

        'src/telegramApi.js',
        'src/IoC.js'
    ])
        .pipe($.concat('telegramApi.js'))
        .pipe($.replace(/<%TELEGRAM-API-VERSION%>/g, version))
        .pipe($.wrapper({
            header: about + '(function(){\n',
            footer: '\n})();'
        }))
        .pipe(gulp.dest('dist'))

        .pipe($.rename({suffix: '.min'}))
        .pipe($.uglify())
        .pipe($.wrapper({header: about}))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    gulp.src('dist/**/*.js')
        .pipe(gulp.dest('example/js'));
});

gulp.task('server', function() {
    gulp.src('example')
        .pipe($.webserver({open: true}));
});

gulp.task('build', ['clean', 'js']);
