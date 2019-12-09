// Required Modules
const asyncHandler = require('express-async-handler')
const path = require('path')
const Url = require('../models/Url')

// Controller
const indexController = {}

indexController.goToShortId = asyncHandler(async (req, res, next) => {
	const code = await Url.findById(req.params.id)

	if (!code) {
		return next()
	}

	return res.redirect(code.url)
})

indexController.loadPages = (req, res, next) => {
	const page = req.path
	console.log(page)

	if (page === '/') {
		return res.status(200).render('index')
	}

	if (page === '/about') {
		return res.status(200).render('about')
	}

	return res.status(404).render('404')
}

module.exports = indexController
