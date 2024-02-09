const mongoose =  require("mongoose");
const Post = require("../models/post");
require("dotenv").config()


async function main(){
  await mongoose.connect(process.env.MONGO_KEY);
}

module.exports = main;

let postData = [
  new Post({
    title:"James Harden",
    image:"https://i.imgur.com/ot8jsg2.gif",
    username:"Pranshu",
    tagline:"Harden could have created the best play of his career and it turned into his worst!!!",
    video:"https://i.imgur.com/ot8jsg2.gif",
    time:new Date()
  }),
  new Post({
    title:"Brandon Knight",
    image:"https://i.imgur.com/gI6EcDq.gif",
    username:"Pranshu",
    tagline:"10 seconds left, tie game. Next shot wins, but Brandon Knight's blunder costs his team victory.",
    video:"",
    time:new Date()
  }),
  new Post({
    title:"Jonathon Simmons",
    image:"https://i.imgur.com/QrREksN.gif",
    username:"Pranshu",
    tagline:"Jonathon Simmons must've felt like Steph Curry for a moment.",
    video:"https://i.imgur.com/QrREksN.gif",
    time:new Date()
  }),
  new Post({
    title:"Andre Drummond",
    image:"https://i.imgur.com/mXqLv6V.gif",
    username:"Pranshu",
    tagline:"Lets see how long dude stands here. Andre Drummond had one of the worst brain malfunctions.",
    video:"https://i.imgur.com/mXqLv6V.gif",
    time:new Date()
  }),
  new Post({
    title:"Kemba walker",
    image:"https://i.imgur.com/2XYqD3Y.gif",
    username:"Pranshu",
    tagline:"Kemba walkers worst play became more famous that his entire career..",
    video:"https://i.imgur.com/2XYqD3Y.gif",
    time:new Date()
  }),
  new Post({
    title:"Lebron James",
    image:"https://i.imgur.com/MroOwv2.gif",
    username:"Pranshu",
    tagline:"Confidence is a key to success but sometimes too much can make you look like a foolish...",
    video:"https://i.imgur.com/MroOwv2.gif",
    time:new Date()
  }),
  new Post({
    title:"Stephan Curry",
    image:"https://i.imgur.com/buZsGhg.gif",
    username:"Pranshu",
    tagline:"Is that Stephan curry???",
    video:"https://i.imgur.com/buZsGhg.gif",
    time:new Date()
  }),

]

// Post.insertMany(postData)
// .then((data)=>{
//   console.log("Data sent successfulyy");
// })
// .catch((err)=>{
//   console.log(err);
// })