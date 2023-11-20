const mongoose = require('mongoose')

const model = new mongoose.Schema({
    category: String,
    city: String,
    email: String,
    firstname: String,
    lastname: String,
    message: String,
    phone: String,
    subject: String
}, { timestamps: true })

module.exports = mongoose.model("contact", model)