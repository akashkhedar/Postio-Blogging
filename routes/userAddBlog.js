const { Router } = require("express");

const router = Router()

router.post('/user/addblog', require('../controllers/addBlog'))

module.exports = router