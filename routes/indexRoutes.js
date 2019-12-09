// Required Modules
const express = require('express')
const indexController = require('../controllers/indexController')

// Vars/Functions
const router = express.Router()

// Routes
router.route('/:id').get(indexController.goToShortId)
router.route('*').get(indexController.loadPages)

module.exports = router
