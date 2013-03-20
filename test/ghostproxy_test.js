'use strict';

var grunt       = require('grunt'),
    expect      = require('chai').expect,
    sinon       = require('sinon'),
    express     = require('express'),
    ghostproxy  = require("../tasks/lib/ghostproxy.js");

describe('grunt-ghostproxy', function() {
    var server;

    beforeEach(function() {
        server = new ghostproxy.Server({base_dir: "."});
    
    });
    it("Grunt be okay", function() {
    
    });

    it("Server has attribute base_dir", function() {
        expect(server.options.base_dir).to.be.equal(".");
    });
    
    it("Server has app property", function() {
        expect(server.app).to.be.ok;
    });
    
    it("sets up static server for given base_dir when start is called", function() {

       var stub = sinon.stub(server.app, "use");
       server.start();
       expect(stub.calledWith(sinon.match(express.static))).to.be.ok;
       stub.restore();

    });
    
    it("calls setupProxy if proxy host is given", function() {
        var stub = sinon.stub(ghostproxy.Server.prototype, "setupProxy");
        server = new ghostproxy.Server({base_dir: ".", proxy_host: "foo"});
        server.start();
        expect(stub.called).to.be.ok;
        stub.restore();
    });
    
    it("does not call setupProxy if proxy host is not given", function() {
        var stub = sinon.stub(ghostproxy.Server.prototype, "setupProxy");
        server = new ghostproxy.Server({base_dir: "."});
        server.start();
        expect(stub.called).not.to.be.ok;
        stub.restore();
    });

});
