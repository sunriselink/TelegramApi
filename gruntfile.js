module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/Rusha/rusha.min.js',
                    'bower_components/long/dist/long.min.js',
                    'bower_components/big-int/src/BigInt.min.js',

                    'node_modules/zlibjs/bin/gunzip.min.js',

                    'vendor/jsbn/jsbn_combined.min.js',
                    'vendor/cryptoJS/crypto.min.js',

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
                    'helpers/Etc/FileManager.js',
                    'helpers/Etc/TmpfsFileStorage.js',
                    'helpers/Etc/ErrorService.js',

                    'helpers/Mtp/MtpDcConfigurator.js',
                    'helpers/Mtp/MtpTimeManager.js',
                    'helpers/Mtp/MtpSecureRandom.js',
                    'helpers/Mtp/MtpRsaKeysManager.js',
                    'helpers/Mtp/MtpAuthorizer.js',
                    'helpers/Mtp/MtpNetworkerFactory.js',
                    'helpers/Mtp/MtpSingleInstanceService.js',
                    'helpers/Mtp/MtpApiManager.js',
                    'helpers/Mtp/MtpApiFileManager.js',

                    'helpers/App/AppPeersManager.js',
                    'helpers/App/AppChatsManager.js',
                    'helpers/App/AppMessagesManager.js',
                    'helpers/App/AppUsersManager.js',
                    'helpers/App/ApiUpdatesManager.js',
                    'helpers/App/AppProfileManager.js',
                    'helpers/App/AppPhotosManager.js',
                    'helpers/App/AppRuntimeManager.js',

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
            },
            bigInt: {
                files: {
                    'bower_components/big-int/src/BigInt.min.js': ['bower_components/big-int/src/BigInt.js']
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
                        cwd: 'vendor',
                        src: [
                            'jsbn/jsbn_combined.min.js',
                            'cryptoJS/crypto.min.js',
                        ],
                        dest: 'example/js/lib/vendor'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components',
                        src: [
                            'long/dist/long.min.js',
                            'Rusha/rusha.min.js'
                        ],
                        dest: 'example/js/lib/vendor'
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
        clean: {
            js: ['example/js/**'],
            nacl: ['example/nacl/**']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', [
        'uglify:bigInt',
        'clean',
        'concat',
        'uglify:main',
        'copy'
    ]);
};