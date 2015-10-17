var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET questions and answers. */
router.get('/testme', function(req, res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{}, function(e, docs){
		res.render('questions', {
			'question': docs
		});
	})
});

/* GET input form */
router.get('/newQuestion', function(req, res){
	res.render('newQuestion');
});
module.exports = router;

/* POST to Add a new question*/
router.post('/adduser', function(req,res){
	// Set our internal DB variable
	var db = req.db;

	// Get our form values
	var question = req.body.question;
	var option1 = req.body.option1;
	var option2 = req.body.option2;
	var option3 = req.body.option3;
	var option4 = req.body.option4; 
	var answer = req.body.answer;

	// Set our collection
	var collection = db.get('usercollection');

	// Submit to the DB
	collection.insert({
		"question": question, 
		"option1": option1, 
		"option2": option2,
		"option2": option3,
		"option2": option4,
		"answer": answer
	}, function(err, doc){
		if (err) {
			// If it failed, return error
			res.send("There was a problem adding the new question");
		}
		else {
			// And forward to success page
			res.redirect("questions")
		}
	})



})