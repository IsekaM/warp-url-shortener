// Required Modules
const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
	longUrl: String,
	shortUrl: String,
	urlCode: String,
	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Url', urlSchema)
