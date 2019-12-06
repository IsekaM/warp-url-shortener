// Required Modules
const ErrorResponse = require('../utils/errorResponse')
const { failedResponse } = require('../utils/response')

// Function
function errorHandler(error, req, res, next) {
	failedResponse(res, error.statusCode, error.message)
}
module.exports = errorHandler
