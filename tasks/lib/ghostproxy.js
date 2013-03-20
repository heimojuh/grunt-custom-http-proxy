var express  = require("express");


var Server = function(options) {
    this.options = options;
    this.app = express();
}

Server.prototype.start = function() {
    this.app.use(express.static(process.cwd+"/"+this.options.base_dir));
    if (this.options.proxy_host) {
        this.setupProxy();
    }
}

Server.prototype.setupProxy = function() {

}

exports.Server = Server;

module.exports = exports;
