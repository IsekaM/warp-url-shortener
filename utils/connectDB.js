// Required Modules
require('dotenv').config()
const mongoose = require('mongoose')

// Variables
const { log } = console
const dbPassword = process.env.DB_PASSWORD
const db = process.env.DB_URL.replace('<password>', dbPassword)

async function connectDB() {
	try {
		const conn = await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})

		log(`Database successfully connected to host: ${conn.connection.host}`)
	} catch (err) {
		log(err)
	}
}


module.exports = connectDB
