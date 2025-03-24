const { Router } = require("express");

const router = Router()

router.post('/user/comment/:id', require('../controllers/usercomment'))

module.exports = router