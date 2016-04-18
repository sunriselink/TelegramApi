module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/lib/polyfill.js',
                    'js/lib/config.js',

                    'vendor/angular/angular.min.js',
                    'vendor/jsbn/jsbn_combined.js',
                    'vendor/cryptoJS/crypto.js',
                    'vendor/rusha/rusha.js',
                    'vendor/zlib/gunzip.min.js',
                    'vendor/closure/long.js',
                    'vendor/leemon_bigint/bigint.js',
                    'vendor/libwebpjs/libwebp-0.2.0.min.js',

                    'js/lib/utils.js',
                    'js/lib/bin_utils.js',
                    'js/lib/tl_utils.js',

                    'helpers/_.js',
                    'helpers/Filter.js',
                    'helpers/qSync.js',
                    'helpers/Helper.js',
                    'helpers/Storage.js',
                    'helpers/CryptoWorker.js',
                    'helpers/IdleManager.js',
                    'helpers/TelegramMeWebService.js',
                    'helpers/NotificationsManager.js',

                    'helpers/MtpDcConfigurator.js',
                    'helpers/MtpTimeManager.js',
                    'helpers/MtpSecureRandom.js',
                    'helpers/MtpRsaKeysManager.js',
                    'helpers/MtpAuthorizer.js',
                    'helpers/MtpNetworkerFactory.js',
                    'helpers/MtpSingleInstanceService.js',
                    'helpers/MtpApiManager.js',

                    'helpers/AppPeersManager.js',
                    'helpers/AppChatsManager.js',
                    'helpers/AppMessagesManager.js',
                    'helpers/AppUsersManager.js',
                    'helpers/ApiUpdatesManager.js',

                    'telegramApi.js'
                ],
                dest: 'out/telegramApi-full.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'out/telegramApi-full.min.js': ['out/telegramApi-full.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'out/',
                        src: [ '*.js' ],
                        dest: 'example/js/'
                    },
                    {
                        expand: true,
                        cwd: 'js/lib/',
                        src: [
                            'crypto_worker.js',
                            'polyfill.js',
                            'bin_utils.js'
                        ],
                        dest: 'example/js/lib/'
                    },
                    {
                        expand: true,
                        cwd: 'nacl',
                        src: [ '**' ],
                        dest: 'example/nacl/'
                    }
                ]
            }
        },
        connect: {
            http: {
                options: {
                    base: '.',
                    protocol: 'http',
                    hostname: 'localhost',
                    port: 5666,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', [
        'concat',
        'uglify',
        'copy'
    ]);
};