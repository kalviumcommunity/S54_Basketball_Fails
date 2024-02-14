const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/post");

const router = express.Router()

require("dotenv").config();

const port = 3000;
router.use(express.json())
async function main() {
  await mongoose.connect(process.env.MONGO_KEY);
}
main()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

router.get("/", async (req, res) => {
  await Post.find().then((data) => {
    returnedData = data;
  });
  res.send(returnedData);
});
// router.post("/",async(req,res)=>{
//   let postData = new Post(req.body)
//   await postData.save()
//   .then(()=>res.send(`ADDED, ${req.body.title}`))
//   .catch((err)=>res.status(500).send(err))
// })
router.get("/:id", async (req, res) => {
  let {id} = req.params
  let returnedData;
  await Post.findById(id).then((data) => {
    returnedData = data;
  });
  res.send(returnedData);
});

// router.get(
//   "/:id",
//   async (req, res) => {
//     let { id } = req.params;
//     let result = await Post.findById(id);
//     if (result == null) {
//       res.status(404).send("some error occured")
//     }
//     console.log(result);
//     res.send(result);
//   }
// );
router.post("/",async(req,res)=>{
  let postData = new Post(req.body)
  await postData.save()
  .then(()=>res.send(`ADDED, ${req.body.title}`))
  .catch((err)=>res.status(500).send(err))
})
router.put("/:id",async(req,res)=>{
  const {id} = req.params
  const newData = req.body
  try{
    const updatedTitle = await Post.findByIdAndUpdate(id,newData)
    if(updatedTitle){
      res.send(`Data Updated`)
    }
    else{
      res.status(404).send("Title not found")
    }
  }
  catch{
    res.status(500).send("Internal error occured")
  }
})
router.delete("/:id",async(req ,res)=>{
  try{
    let {id} = req.params
    let titleDelete = await Post.findByIdAndDelete(id)
    console.log("titleDelete: ", titleDelete);
    if(titleDelete.deletedCount == 0){
      res.status(404).send(`Title not found`)
    }
    else{
      res.send(`Deleted ${req.body.title} succesfully`)
    }
  }
  catch{
    res.status(500).send("Internal error occured")
  }
})

module.exports = router