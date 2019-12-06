// Required Modules
const asyncHandler = require('express-async-handler')
const Url = require('../models/Url')

// Controller
const indexController = {}

indexController.goToShortId = asyncHandler(async (req, res, next) => {
	const code = await Url.findById(req.params.id)

	if (!code) {
		return res.redirect('/')
	}

	return res.redirect(code.url)
})

indexController.notFound = (req, res, next) => {}

module.exports = indexController
