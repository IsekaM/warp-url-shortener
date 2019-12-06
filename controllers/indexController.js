// Required Modules
const asyncHandler = require('express-async-handler')
const Url = require('../models/Url')

// Vars/Functions
const { log } = console

// Controller
const indexController = {}

indexController.index = async (req, res, next) => {
	try {
		const code = await Url.findById(req.params.id)

		if (!code) return res.redirect('/')

		return res.redirect(code.longUrl)
	} catch (error) {
		log(error)
	}
}

module.exports = indexController
