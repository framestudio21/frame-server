const mongoose = require('mongoose')

const model = new mongoose.Schema({
    email: String,
    name: String,
    text: String
}, { timestamps: true })

module.exports = mongoose.model("feedback", model)