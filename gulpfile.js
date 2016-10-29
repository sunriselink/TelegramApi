var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('clean', function () {
    return gulp.src([
        'example/js',
        'dist/'
    ]).pipe($.clean({force: true}));
});

gulp.task('js', function () {
    return gulp.src([
        'node_modules/long/dist/long.min.js',
        'node_modules/zlibjs/bin/gunzip.min.js',
        'node_modules/rusha/rusha.min.js',
        
        'src/vendor/**/*.js',
        'src/js/lib/*.js',

        'src/helpers/Etc/Helper.js',
        'src/helpers/Etc/qSync.js',
        'src/helpers/Etc/Storage.js',
        'src/helpers/Etc/CryptoWorker.js',
        'src/helpers/Etc/IdleManager.js',
        'src/helpers/Etc/TelegramMeWebService.js',
        'src/helpers/Etc/NotificationsManager.js',

        'src/helpers/Mtp/MtpDcConfigurator.js',
        'src/helpers/Mtp/MtpTimeManager.js',
        'src/helpers/Mtp/MtpSecureRandom.js',
        'src/helpers/Mtp/MtpRsaKeysManager.js',
        'src/helpers/Mtp/MtpAuthorizer.js',
        'src/helpers/Mtp/MtpNetworkerFactory.js',
        'src/helpers/Mtp/MtpSingleInstanceService.js',
        'src/helpers/Mtp/MtpApiManager.js',
        'src/helpers/Mtp/MtpApiFileManager.js',

        'src/helpers/App/AppPeersManager.js',
        'src/helpers/App/AppChatsManager.js',
        'src/helpers/App/AppUsersManager.js',
        'src/helpers/App/AppProfileManager.js',

        'src/telegramApi.js'
    ])
        .pipe($.concat('telegramApi.js'))
        .pipe($.wrapper({
            header: '(function(){\n',
            footer: '})();'
        }))
        .pipe(gulp.dest('dist'))
        .pipe($.rename({suffix: '.min'}))
        .pipe($.uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
    gulp.src('dist/**/*.js')
        .pipe(gulp.dest('example/js'));
});

gulp.task('server', function () {
    gulp.src('example')
        .pipe($.webserver({open: true}));
});

gulp.task('build', ['clean', 'js']);
