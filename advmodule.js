const mongoose = require('mongoose')

const model = new mongoose.Schema({
    category: String,
    description: String,
    name: String,
    tag: String,
    thumbnail: String
}, { timestamps: true })

module.exports = mongoose.model("advertisement", model)