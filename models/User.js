	const mongoose= require('mongoose');
	const User = mongoose.Schema({
		name:{
			type:String
		},
		email:{
			type:String
		},
		password:{
			type:String
		},
		date:{
			type:Date,
			default:Date.now
		}
	},{strict: false});
	
	module.exports = mongoose.model('user',User); //first parameter tablename and second is schema
