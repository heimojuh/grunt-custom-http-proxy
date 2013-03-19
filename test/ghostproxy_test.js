'use strict';

var grunt = require('grunt'),
    expect = require('chai').expect,
    ghostproxy = require("../tasks/lib/ghostproxy.js");

describe('grunt-ghostproxy', function() {
    
    it("Grunt be okay", function() {
    
    });

    it("Server has attribute base_dir", function() {
        var server = new ghostproxy.Server({base_dir: "."});
        expect(server.options.base_dir).to.be.equal(".");
    });
});
