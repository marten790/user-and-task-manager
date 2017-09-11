'use strict';
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var TaskSchema = mongoose.Schema({
		"name":"",
		"description" : "",
		"date_time" : {
			type: Date,
			default: Date.now
		},
		status: {
			type: [{
				enum: ['pending', 'ongoing', 'completed']
			}],
			default: ['pending']
		}
	}
,{ _id : true });


var UserSchema = new Schema({
	username: "",
	first_name: "",
	last_name:"",
	tasks: [TaskSchema]
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Users', UserSchema);
