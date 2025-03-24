const { Schema, model } = require('mongoose');
const { log } = require('node:console');
const { createHmac, randomBytes } = require('node:crypto');
const { createToken } = require('../services/authentication');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,

    },
    profileImage: {
        type: String,
        default: './public/images/1053244.png'
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
})

userSchema.pre('save', function (next) {
    const user = this;
    if(!user.isModified('password')){
        return;
    }
    const salt = randomBytes(16).toString()
    const hashedPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest('hex')

    this.salt = salt
    this.password = hashedPassword

    next()
})

userSchema.static('passMatchTokenCreate', async function (email, password) {
    const user = await this.findOne({ email })
    const salt = user.salt
    const currentHashedPass = user.password
    const givenHashedPass = createHmac('sha256', salt)
    .update(password)
    .digest('hex')

    if(currentHashedPass !== givenHashedPass){
        throw new Error("Incorrect Password!")
    }
    const token = createToken(user)
    return token
})

const user = model("user", userSchema)

module.exports = user