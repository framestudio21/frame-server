const mongoose = require('mongoose')

const model = new mongoose.Schema({
    author: String,
    behancelink: String,
    category: String,
    date: String,
    description: String,
    designType: String,
    dribblelink: String,
    facebooklink: String,
    googledrivelink: String,
    imageratio: String,
    instagramlink: String,
    pinterestlink: String,
    tag: String,
    thumbnail: String,
    title: String,
    twitterlink: String
}, { timestamps: true })

module.exports = mongoose.model("digitalart", model)