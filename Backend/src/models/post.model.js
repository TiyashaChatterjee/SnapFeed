//This file used to generate the structure of the database system
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image:String,
    caption: String
})

const postModel = mongoose.model("notes1", postSchema);

module.exports = postModel;