/**
 * @file
 *
 * ### Responsibilities
 * - automate common tasks using grunt
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author  <>
 */
'use strict';

module.exports = function (grunt) {
    var config = {
        app: 'src',
        dist: 'dist'
    };

    require('load-grunt-tasks')(grunt);     //auto-load tasks
    require('time-grunt')(grunt);           //keep track of task execution times

    grunt.initConfig({
        config: config,

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'gruntfile.js',
                '<%= config.app %>/{,*/}*.js',
                'test/spec/{,*/}*.js'
            ]
        },

        concat: {
            dist: {
                src: '<%= config.app %>/**/*.js',
                dest: '<%= config.dist %>/spel2js.js'
            }
        },

        uglify: {
            dist: {
                src: '<%= config.dist %>/spel2js.js',
                dest: '<%= config.dist %>/spel2js.min.js'
            }
        },

        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.registerTask('test', [
        'karma:unit'
    ]);

    grunt.registerTask('build', [
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
