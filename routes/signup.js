const { Router } = require('express')

const router = Router()

router.get('/signup', require('../controllers/signupPage'))

module.exports = router