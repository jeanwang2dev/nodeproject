module.exports = {
	//this provides the content for the index page
  	index : function(req, res) {
                //render the home page
		res.render('home',{title: 'Home Page'});
	}
	
}
