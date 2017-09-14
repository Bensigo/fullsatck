const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
// using the schema to make a collection in our DB
const Post = mongoose.model('Post', postSchema)
module.exports = Post
