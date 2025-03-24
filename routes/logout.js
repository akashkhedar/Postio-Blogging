const { Router } = require('express')

const router = Router()

router.get('/logout', require('../controllers/logout'))

module.exports = router