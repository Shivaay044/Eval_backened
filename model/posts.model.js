const mongoose = require("mongoose")


const postsSchema = mongoose.Schema({
    title: String,
    body: String,
    device: String,
    no_of_comments: Number,
    userID:String
})

const postsModel = mongoose.model("/posts",postsSchema)

module.exports = {postsModel}