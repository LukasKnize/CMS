const mongoose = require('mongoose')
const Schema = mongoose.Schema

const page = new mongoose.Schema({
    headline: {
        type: String,
        requried: true
    },
    id: {
        type: String,
        requried: true,
        imutable: true
    },
    url: {
        type: String,
        requried: true
    },
    desc: {
        type: String,
        requried: true
    },
    template: {
        type: String,
        requried: true
    },
    content: [Object],
    visited: Number,
    author: {
        type: String,
        requried: true
    }
})

module.exports = mongoose.model("Pages", page)