const { Router } = require("express");

const router = Router()

router.post('/user/signup', require('../controllers/userSignup'))

module.exports = router