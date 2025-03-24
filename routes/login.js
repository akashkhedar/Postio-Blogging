const { Router } = require('express')

const router = Router()

router.get('/login', require('../controllers/loginPage'))

module.exports = router