const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/blogify'

const connectToMongo = () => {
    mongoose.connect(URI)
    .then(res => console.log("Connected to Mongo!"))
    .catch(err => console.log(err))
}

module.exports = connectToMongo