/*
 * grunt-ghostproxy
 * https://github.com/evilpupu/grunt-ghostproxy
 *
 * Copyright (c) 2013 Juha Heimonen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= simplemocha.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    ghostproxy: {
        default_options: {
            options: {
            },
            files: {
                'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123'],
            },
        },
        custom_options: {
            options: {
                separator: ': ',
                punctuation: ' !!!',
            },
            files: {
                'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123'],
            },
        },
    },

        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },

            all: { src: 'test/**/*.js' }
        }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-simple-mocha');
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['simplemocha']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
