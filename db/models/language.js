const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
	name: String,
	courses: [
		{
			name: String,
			description: String,
			difficulty: Number,
		},
	],
});

export default languageSchema;