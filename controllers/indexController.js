// Required Modules
const asyncHandler = require('express-async-handler')
const Url = require('../models/Url')

// Vars/Functions
const { log } = console

// Controller
const indexController = {}

indexController.index = asyncHandler(async (req, res, next) => {
	const code = await Url.findById(req.params.id)

	if (!code) {
		return res.redirect('/')
	}

	return res.redirect(code.url)
})

module.exports = indexController
