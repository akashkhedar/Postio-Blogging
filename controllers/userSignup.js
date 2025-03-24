const user = require('../models/user')

const userSignup = async (req, res) => {
    const { fullName, email, password } = req.body
    await user.create({
        fullName,
        email,
        password
    })
    res.redirect('/')
}

module.exports = userSignup