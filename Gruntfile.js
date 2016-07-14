'use strict';

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-wiredep');

    // configurable paths
    var yeomanConfig = {
        app: 'app'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
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
                    base: [
                        '<%= yeoman.app %>'
                    ]
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
            src: 'app/index.html' // point to your HTML file.
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
