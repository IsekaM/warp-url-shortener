// Required Modules
const asyncHandler = require('express-async-handler')
const validUrl = require('valid-url')
const Url = require('../models/Url')

// Vars/Functions
const { log } = console

// Controller
const urlController = {}

urlController.getAll = async (req, res, next) => {
	try {
		const urls = await Url.find({})
		res.status(200).json({
			success: true,
			message: 'Resources found sucessfully',
			data: urls
		})
	} catch (err) {
		res.status(404).json({
			success: false,
			message: 'Resources not found'
		})
	}
}

urlController.getSingle = async (req, res, next) => {
	try {
		const url = await Url.findById(req.params.id)
		res.status(200).json({
			success: true,
			message: 'Resource found sucessfully',
			data: url
		})
	} catch (err) {
		res.status(404).json({
			success: false,
			message: 'Resource not found'
		})
	}
}

urlController.post = async (req, res, next) => {
	const { longUrl } = req.body

	if (!validUrl.isUri(longUrl)) {
		return res.status(400).json({
			success: false,
			message: 'Invalid Url sent'
		})
	}

	try {
		const url = await Url.findOne({ longUrl })

		if (url) {
			return res.status(400).json({
				success: false,
				message: 'Url already exists in database ' + url
			})
		}
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error
		})
	}

	try {
		const url = await Url.create(req.body)

		res.status(200).json({
			success: true,
			message: 'Resource created sucessfully',
			data: url
    })
    
	} catch (error) {
    res.status(500).json({
			success: false,
			message: error
		})
  }
}

module.exports = urlController
