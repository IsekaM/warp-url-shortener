exports.failedResponse = (res, status, message) => {
	return res.status(status).json({
		success: false,
		message: message
	})
}

exports.successResponse = (res, status, message, data) => {
	return res.status(status).json({
		success: true,
		message: message,
		data: data
	})
}
