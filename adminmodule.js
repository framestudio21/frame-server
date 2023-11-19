const mongoose = require('mongoose')
const adminModel = new mongoose.Schema({
    email: String,
    pass: String
})

module.exports = mongoose.model("Admin", adminModel)