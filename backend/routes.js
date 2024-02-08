const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/post");
const router = express.Router()

const port = 3000;
app.use(express.json())
async function main() {
  await mongoose.connect(
    "mongodb+srv://pranshu19:WkJ9147qWCKgOX10@basketball-fails.3mk856i.mongodb.net/"
  );
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
router.post("/",async(req,res)=>{
  let postData = new Post(req.body)
  await postData.save()
  .then(()=>res.send(`ADDED, ${req.body.title}`))
  .catch((err)=>res.status(500).send(err))
})
router.put("/:title",async(req,res)=>{
  const {title} = req.params
  const newTitle = req.body.title
  try{
    const updatedTitle = await Post.findOneAndUpdate({title:title},{title:newTitle})
    if(updatedTitle){
      res.send(`The new title is ${newTitle}`)
    }
    else{
      res.status(404).send("Title not found")
    }
  }
  catch{
    res.status(500).send("Internal error occured")
  }
})
router.delete("/",async(req ,res)=>{
  try{
    let toDelete = req.body.title
    let titleDelete = await Post.deleteOne({title:toDelete})
    console.log("titleDelete: ", titleDelete);
    if(titleDelete.deletedCount == 0){
      res.status(404).send(`Title not found - ${req.body.title}`)
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