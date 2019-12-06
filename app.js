// Required Modules
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const connectDB = require('./utils/connectDB')
const errorHandler = require('./middlewares/errorHandler')
const indexRoutes = require('./routes/indexRoutes')
const urlRoutes = require('./routes/urlRoutes')

// App Variables
const app = express()
const { log } = console

// App Constants
const PORT = process.env.PORT || 3000

// Connecting to Database
connectDB()

// Middlewares
// app.use(cors())
// app.use(helmet())
app.use(morgan('short'))
app.use(express.json())
app.use(express.static('./static/views'))
app.use('/public', express.static('./static/public'))

// Mounting Routes
app.use('/', indexRoutes)
app.use('/api/v1/url/', urlRoutes)

// Error Handler Middleware
app.use(errorHandler)

// Exposing App to the World
app.listen(PORT, () => log(`App started on port: ${PORT}`))
