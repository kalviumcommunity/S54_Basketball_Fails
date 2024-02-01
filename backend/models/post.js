const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  likes:{
    type:Number,
    default:0
  },
  comments:{
    type:Number,
    default:0
  },
  time:Date
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;