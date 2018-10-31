'use strict'
/* Set up main variables */

var express = require('express'),
    app = express();

app.get('/', function(req, res){

	res.send('<p style="color:blue;">This is Jean\'s Hello World Page!</p>');

});  

app.listen(3000, function(){

	console.log('Server up : http://localhost:3000');

});
