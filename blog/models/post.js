const mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
	title: {
		type: String
	},
	content: {
		type: String
	},
	authorName: {
		type: String
	},
	date: {
		type: Date
	}
})

mongoose.model('Post', postSchema)

