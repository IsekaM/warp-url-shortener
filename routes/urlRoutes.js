// Required Modules
const express = require('express')
const urlController = require('../controllers/urlsController')

// Vars/Functions
const router = express.Router()

// Routes
router
  .route('/')
  .get(urlController.getAll)
  .post(urlController.post)

router
  .route('/:id')
  .get(urlController.getSingle)

module.exports = router