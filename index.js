'use strict'

/* Set up main variables */
var express = require('express'),
    app = express(),
    config = require('./server/configure');

/* Call the module.exports constructor function of the configure file
This adds to app and returns app*/
app = config(app);

/* Set the port */
app.set('port', process.env.PORT || 3000);
  

/* Listen on port 3000 */
app.listen( app.get('port'), function(){

	console.log('Server up : http://localhost:' + app.get('port'));

});
