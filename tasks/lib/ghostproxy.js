var express     = require("express"),
proxy           = require("http-proxy"),
grunt           = require("grunt");

var apiProxy = function(host, port, proxy) {
    "use strict";
    proxy.on("proxyError", function (err, req, res) {
        res.statusCode = 500;
        res.write("API Proxying to "+req.url+" failed with: "+err.toString());
        res.end();
    });
    return function(req, res, next) {
      
        req.headers.host = host+":"+port;
        proxy.proxyRequest(req, res); 
    };
};

var Server = function(options) {
    "use strict";
    this.options = options;
    this.app = express();
};

Server.prototype.start = function(silent) {
    "use strict";
    var proxyport;
    var port = this.options.port || 8000;
    var path = process.cwd()+"/"+this.options.base_dir;
    this.app.use(express.static(path));
    grunt.log.writeln("serving from  "+path+" port "+port);
    
    if (this.options.customroutes) {
        grunt.log.writeln("attaching stub routes");
        this.options.customroutes(this.app);
    }
    
    if (this.options.proxy && this.options.proxy.host) {
        proxyport = this.options.proxy.port || 80;
        grunt.log.writeln("Proxying to "+this.options.proxy.host+" port "+proxyport);
        this.setupProxy();
    }
    this.app.use(express.errorHandler());
    if (!silent) {
        this.app.listen(port);
    }
};

Server.prototype.setupProxy = function() {
    "use strict";
    this.app.use(apiProxy(this.options.proxy.host, this.options.proxy.port, new proxy.HttpProxy({
        changeOrigin: true,
        target: {
            host: this.options.proxy.host,
            port: this.options.proxy.port
        }
        })
        ));
};

exports.Server = Server;
module.exports = exports;
