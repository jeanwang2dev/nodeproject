/* Pull in the dependencies */
var routes = require('./routes'),
    express = require('express');

module.exports = function(app){
	/* Put app into routes constructor */
        routes(app);

        /* Return app */
        return app;
};


