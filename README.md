# grunt-custom-http-proxy

> Server / Mockable proxy for grunt

Seriously, this is just a fork, currently a copy, of server task from [Lineman](https://github.com/testdouble/lineman).
Mainly done, because this way it's more easy for me to customize. One such use case would to intercept proxied calls and such,
but that is on todo list.

Also, this task is standard MultiTask, which Lineman's was not.

## Getting Started
This plugin requires Grunt `~0.4.1`


## The "custom-http-proxy" task

### Overview
In your project's Gruntfile, add a section named `custom-http-proxy` to the data object passed into `grunt.initConfig()`.

```js
"custom-http-proxy": {
    dev: {
        options: {
            base_dir: "test/html/",
            proxy: {
                host: "proxyhost",
                port: proxyport
            },
            customroutes: function(app) {
                app.get('/api/foo', function(req, res){
                    res.json({ message: "BAR" });
                });
            }
        }
    }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
