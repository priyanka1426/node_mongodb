var MongoClient = require('mongoose');
var env= require('dotenv/config');

var db;
MongoClient.connect(process.env.DB,{ useNewUrlParser: true,useUnifiedTopology: true } ,function(err,db){
	if(err){
		console.log("error "+err.message);
	}else{
		console.log("database connected ");

		db=db;
	}
})

var config = {
	db:db
}

module.exports=config;
