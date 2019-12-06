// Required Modules
require('dotenv').config()

const mongoose = require('mongoose')
const shortid = require('shortid')

const urlSchema = new mongoose.Schema({
	_id: {
		type: String,
		default: shortid.generate
	},

	url: {
		type: String,
		trim: true,
		required: [true, 'longUrl is required']
	},

	createAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Url', urlSchema)
