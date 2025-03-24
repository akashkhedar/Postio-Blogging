const JWT = require('jsonwebtoken')

const SECRET = 'kingDOONG'

const createToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        profileImage: user.profileImage,
        role: user.role
    }
    return JWT.sign(payload, SECRET)
}

const validateToken = (token) => {
    if(!token){
        return null
    }
    return JWT.verify(token, SECRET)
}

module.exports = {
    createToken, 
    validateToken
}