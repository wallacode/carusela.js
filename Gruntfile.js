'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-wiredep');

    // configurable paths
    var appConfig = {
        app: require('./bower.json').appPath || 'app'
    };

    grunt.initConfig({
        yeoman: appConfig,
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeoman.app %>/*.html',
                '<%= yeoman.app %>/styles/{,*!/}*.css',
                '<%= yeoman.app %>/scripts/{,*!/}*.js',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        },
        connect: {
            options: {
                port: 9001,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    debug: true,
                    base: [
                        '<%= yeoman.app %>'
                    ],
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    open: true,
                    base: [
                        'tests',
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        wiredep: {
          target: {
            src: ['<%= yeoman.app %>/index.html']
          }
        }
    });

    grunt.registerTask('server', [
      'wiredep',
      'connect:livereload',
      'watch'
    ]);

    grunt.registerTask('test', [
      'connect:test',
      'watch'
    ]);
};
