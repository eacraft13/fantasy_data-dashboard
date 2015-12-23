var assets  = require('connect-assets');
var express = require('express');
var favicon = require('serve-favicon');
var helmet  = require('helmet');
var pmx     = require('pmx').init({ http: true, network: true, port: true });



module.exports = function(config) {
    var app   = express();

    app.use(favicon('./lib/_images/favicon.ico'));
    app.use('/images', express.static('./lib/_images'));
    app.use(helmet());

    app.set('views', './lib/views');
    app.set('view engine', 'jade');

    app.use(assets({ paths: ['./lib/views', './lib/_vendor'] }));



    // App routes
    app

    .get('/',                       handler('home'))
    .get('/team-report/:team_abbr', handler('team-report'));



    return app;



    function handler(view) {
        return function (req, res) {
            console.log('here');
            res.render(view, req.params);
        };
    }
};
