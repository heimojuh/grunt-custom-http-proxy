/*
 * grunt-ghostproxy
 * https://github.com/evilpupu/grunt-ghostproxy
 *
 * Copyright (c) 2013 Juha Heimonen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

var ghostproxy = require("./lib/ghostproxy.js");

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('custom-http-proxy', 'Customizable http / proxy server', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    
    });

    var server = new ghostproxy.Server(options);
    server.start();


  });

};
