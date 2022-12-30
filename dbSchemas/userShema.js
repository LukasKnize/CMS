const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new mongoose.Schema({
    username: {
        type: String,
        requried: true
    },
    id:{
        type: String,
        requried: true,
        imutable: true
    },
    email: String,
    password: String,
    type: String,
    salt: String,
    isActive: Boolean
})

module.exports = mongoose.model("User", user)