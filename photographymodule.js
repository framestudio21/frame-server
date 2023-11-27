const mongoose = require('mongoose')

const model = new mongoose.Schema({
behancelink: String,
date: String,
description: String,
designType: String,
devicename: String,
devicetype: String,
dribblelink: String,
edtitor: String,
facebooklink: String,
googledrivelink: String,
imageratio: String,
instagramlink: String,
photographer: String,
phototag: String,
pinterestlink: String,
specialphototag: String,
thumbnail: String,
title: String,
twitterlink: String
}, { timestamps: true })

module.exports = mongoose.model("photography", model)