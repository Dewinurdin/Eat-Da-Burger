let express = require("express");
let app = express();
let port = process.env.PORT || 8080; // local
let handlebars = require("express-handlebars");




// index.handlebars


//views
	// layouts
		// main.handlebars

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Templates Engines
	// HTML + JavaScript = template engines
	// Handlebars
	// EJS (popular)
	// Mustache
	// Jade (popular)
	// Pug (dieing)

// Deploy
	// Heroku || process.env.PORT || 5000
	// Amazon || process.env.PORT
	// Google Cloud || process.env.PORT 
	// Zeit
	// Github Pages
		// 1m users
		// 1m ports 

app.post("/add", (req, res) => {
	// TODO
	// req.body

	// Query to store them inside the Database
});

app.post("/update", (req, res) => {
	// TODO

	// req.body

	// Query update devoured to true
});


app.get("/about", (req, res) => {
	// res.sendFile("index.handlebars"); WRONG
	// TODO
	// MySQL Query
	// [{1}, {}] 2m


	// From our DB
	let users = [
		{
			devoured:true,
			name: "Mango"
		},
		{
			devoured:true,
			name:"Pineapple"
		},
		{
			devoured:false,
			name:"Apple"
		}
	]; // 2m

	// each = for loop
	// list = for loop (<li>)
	// if statement
	res.render("dashboard", { users: users, title: "Dashboard" });
});


app.get("/", (req, res) => {
	// res.sendFile("dashboard.handlebars"); WRONG
	// TODO

	res.render("index", {title:"Home"});
});




app.listen(port, () => {
	console.log("App is starting on port ", port);
});