const mongoose =  require("mongoose");
const Post = require("../models/post");


async function main(){
  await mongoose.connect("mongodb+srv://pranshu19:WkJ9147qWCKgOX10@basketball-fails.3mk856i.mongodb.net/");
}

module.exports = main;

let postData = [
  new Post({
    title:"Curry slips",
    image:"https://www.viralhoops.com/wp-content/uploads/2015/03/Dunk-Contest-Fails1.png",
    username:"user568",
    time:new Date()
  }),
  new Post({
    title: "Slam Dunk Mishap",
    image: "https://www.viralhoops.com/wp-content/uploads/2015/03/Dunk-Contest-Fails1.png",
    username: "hoopsFanatic",
    time: new Date("2024-01-25T08:30:00")
  }),

  new Post({
    title: "Three-Pointer Fail",
    image: "https://example.com/three-pointer-fail.png",
    username: "slamdunkMaster",
    time: new Date("2024-01-20T14:45:00")
  }),

  new Post({
    title: "Crossover Gone Wrong",
    image: "https://example.com/crossover-gone-wrong.png",
    username: "basketballDreamer",
    time: new Date("2024-01-18T10:15:00")
  }),

  new Post({
    title: "Airball Embarrassment",
    image: "https://example.com/airball-embarrassment.png",
    username: "bballJoker",
    time: new Date("2024-01-15T16:20:00")
  }),

  new Post({
    title: "Behind-the-Back Blunder",
    image: "https://example.com/behind-the-back-blunder.png",
    username: "dunkFailer",
    time: new Date("2024-01-12T09:45:00")
  }),

  new Post({
    title: "Alley-Oop Flop",
    image: "https://example.com/alley-oop-flop.png",
    username: "slipperyDribbler",
    time: new Date("2024-01-10T12:30:00")
  }),

  new Post({
    title: "Dribble Slip-up",
    image: "https://example.com/dribble-slip-up.png",
    username: "crossoverGuru",
    time: new Date("2024-01-08T18:10:00")
  }),

  new Post({
    title: "Failed Fast Break",
    image: "https://example.com/failed-fast-break.png",
    username: "fastBreakFailer",
    time: new Date("2024-01-05T21:05:00")
  }),

  new Post({
    title: "Rejected at the Rim",
    image: "https://example.com/rejected-at-the-rim.png",
    username: "rimProtector",
    time: new Date("2024-01-02T14:55:00")
  }),

  new Post({
    title: "Half-Court Hilarity",
    image: "https://example.com/half-court-hilarity.png",
    username: "courtJester",
    time: new Date("2023-12-30T11:20:00")
  })
]

Post.insertMany(postData)
.then((data)=>{
  console.log("Data sent successfulyy");
})
.catch((err)=>{
  console.log(err);
})