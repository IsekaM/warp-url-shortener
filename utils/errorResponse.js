class ErrorResponse extends Error {
	constructor(statusCode) {
		super(message)
		this.stausCode = statusCode
	}
}
