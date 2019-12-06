// Required Modules
require('dotenv').config()

const mongoose = require('mongoose')
const shortid = require('shortid')

const urlSchema = new mongoose.Schema({
	_id: {
		type: String,
		default: shortid.generate
	},
	longUrl: {
		type: String,
		trim: true,
		required: [true, 'longUrl is required'],
		match: [
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
			'Please add valid website'
		]
	},
	// shortUrl: String,
	createAt: {
		type: Date,
		default: Date.now
	}
})


module.exports = mongoose.model('Url', urlSchema)
