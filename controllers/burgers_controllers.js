//Dependancies
let burger = require('./../model/burger.js');
let express = require('express');
let router = express.Router();

// Create the router for the app, and export the router at the end of your file.
 
router.get('/', (req, res) => {
	burger.all(function(data){
		let hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post('/burgers', (req, res) => {
	burger.create([
		"burger_name"
		], [
		res.body.burger_name
		], function(data){
			res.redirect('/');
		});
});

router.put('/burger/:id/', (req, res) => {
	let condition = 'id' + req.params.id;
	console.log("CONDITION: ", condition);
	burger.updateOne({
		devoured: true
	}, condition, (data) => {
		res.redirect('/');
	});	
});

module.exports = router;