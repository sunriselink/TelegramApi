module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'vendor/angular/angular.min.js',
                    'vendor/jsbn/jsbn_combined.js',
                    'vendor/cryptoJS/crypto.js',
                    'vendor/rusha/rusha.js',
                    'vendor/zlib/gunzip.min.js',
                    'vendor/closure/long.js',
                    'vendor/leemon_bigint/bigint.js',
                    'vendor/libwebpjs/libwebp-0.2.0.min.js',

                    'js/lib/polyfill.js',
                    'js/lib/config.js',
                    'js/lib/utils.js',
                    'js/lib/bin_utils.js',
                    'js/lib/tl_utils.js',

                    'helpers/Etc/_.js',
                    'helpers/Etc/Filter.js',
                    'helpers/Etc/qSync.js',
                    'helpers/Etc/Helper.js',
                    'helpers/Etc/Storage.js',
                    'helpers/Etc/CryptoWorker.js',
                    'helpers/Etc/IdleManager.js',
                    'helpers/Etc/TelegramMeWebService.js',
                    'helpers/Etc/NotificationsManager.js',

                    'helpers/Mtp/MtpDcConfigurator.js',
                    'helpers/Mtp/MtpTimeManager.js',
                    'helpers/Mtp/MtpSecureRandom.js',
                    'helpers/Mtp/MtpRsaKeysManager.js',
                    'helpers/Mtp/MtpAuthorizer.js',
                    'helpers/Mtp/MtpNetworkerFactory.js',
                    'helpers/Mtp/MtpSingleInstanceService.js',
                    'helpers/Mtp/MtpApiManager.js',

                    'helpers/App/AppPeersManager.js',
                    'helpers/App/AppChatsManager.js',
                    'helpers/App/AppMessagesManager.js',
                    'helpers/App/AppUsersManager.js',
                    'helpers/App/ApiUpdatesManager.js',
                    'helpers/App/AppProfileManager.js',
                    'helpers/App/AppPhotosManager.js',

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