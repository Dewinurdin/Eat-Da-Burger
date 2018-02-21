let orm = require('./../config/orm.js');

//create the code that will call the ORM functions using burger specific input for the ORM.
let burger = {
	selectAll: function(cb){
		orm.all("burgers" (res) => {
			cb(res);
		});
	};
	insertOne: function(cols, vals, cb){
		orm.create("burgers", cols, vals, (res) => {
			cb(res);
		});
	};
	updateOne: function(objColVals, condition, cb){
		orm.update("burgers", objColVals, condition, (res) => {
			cb(res);
		});
	};
};

// Export at the end of the burger.js file.
module.exports = burger;
