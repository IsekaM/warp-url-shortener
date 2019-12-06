// Required Modules
const ErrorResponse = require('../utils/errorResponse')
const { failedResponse } = require('../utils/response')
const { log } = console

// Function
function errorHandler(error, req, res, next) {
	const err = { ...error }
	err.message = error.message
	log(err)
	failedResponse(res, err.statusCode || 500, error.message)
}
module.exports = errorHandler
