const { Router } = require("express");

const router = Router()

router.get('/addblog', require('../controllers/addBlogPage.js'))

module.exports = router