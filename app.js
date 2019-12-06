// Required Modules
require('dotenv').config()

const asyncHandler = require('express-async-handler')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const connectDB = require('./utils/connectDB')
const urlRoutes = require('./routes/urlRoutes')

// App Variables
const app = express()
const { log } = console

// App Constants
const PORT = process.env.PORT || 3000

// Connecting to Database
connectDB()

// Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('short'))
app.use(express.json())

// Mounting Routes
app.use('/api/v1/url/', urlRoutes)
app.get('/', (req, res) => res.send('<h1>Hello World</h1>'))

// Exposing App to the World
app.listen(PORT, () => log(`App started on port: ${PORT}`))
