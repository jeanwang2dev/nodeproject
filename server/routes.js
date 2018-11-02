/* Pull in our dependencies */
var express = require('express'),
    router = express.Router(),
    /* Get controller files */
    home = require('../controllers/home');

module.exports = function(app){
 	/* Home */
 	router.get('/', home.index);
  	app.use(router);
}
