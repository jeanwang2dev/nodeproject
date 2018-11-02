/* Pull in the dependencies */
var routes = require('./routes'),
    express = require('express'),
    exphbs = require('express-handlebars');

module.exports = function(app){
	/* Put app into routes constructor */
        routes(app);

        /* Set up handlebars as the template engine */
        app.engine('handlebars', exphbs.create({
		defaultLayout: 'main',
		layoutsDir: app.get('views') + '/layouts',
 		partialsDir: app.get('views') + '/partials',
	}).engine);
      	app.set('view engine', 'handlebars');

        /* Return app */
        return app;
};


