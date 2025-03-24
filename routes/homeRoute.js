const express = require('express')

const router = express.Router()

router.get('/', require('../controllers/homePage.js'))

module.exports = router