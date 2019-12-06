// Required Modules
const asyncHandler = require('express-async-handler')
const validUrl = require('valid-url')
const ErrorResponse = require('../utils/errorResponse')
const Url = require('../models/Url')
const { failedResponse, successResponse } = require('../utils/response')

// Vars/Functions
const { log } = console

// Controller
const urlController = {}

urlController.getAll = asyncHandler(async (req, res, next) => {
	const urls = await Url.find({})
	successResponse(res, 200, 'Resource found successfully', urls)
})

urlController.getSingle = asyncHandler(async (req, res, next) => {
	const url = await Url.findById(req.params.id)

	if (!url) {
		return next(new ErrorResponse('Resource not found in database', 404))
	}

	successResponse(res, 200, 'Resource found successfully', url)
})

urlController.post = asyncHandler(async (req, res, next) => {
	const { url } = req.body

	if (!validUrl.isUri(url)) {
		next(new ErrorResponse('Invalid or empty url sent', 400))
	}

	const existingUrl = await Url.findOne({ url })

	if (existingUrl) {
		return successResponse(res, 200, 'Url already found in database', url)
	}

	const newUrl = await Url.create(req.body)
	successResponse(res, 201, 'Resource created successfullly', newUrl)
})

urlController.delete = asyncHandler(async (req, res, next) => {
	const url = await Url.findByIdAndDelete(req.params.id)

	if (!url) {
		return next(new ErrorResponse('Resource not found in database', 404))
	}

	successResponse(res, 204, 'Resource deleted successfully', url)
})

module.exports = urlController
