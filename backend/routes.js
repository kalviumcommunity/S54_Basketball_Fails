const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/post");
const { validatePost } = require("./utils/PostValidation");
const CustomError = require("./utils/ExpressError");
const User = require("./models/user");
const wrapAsync = require("./utils/wrapAsync");

const router = express.Router();
const userRouter = express.Router();

require("dotenv").config();

const port = 3000;
router.use(express.json());
userRouter.use(express.json());
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

const postValidation = (req, res, next) => {
  let { error } = validatePost.validate(req.body);
  if (error) {
    throw new CustomError(400, error);
  } else {
    next();
  }
};

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
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let result = await Post.findById(id);
    // console.log(result)
    if (result == null || result.length==0) {
      throw new CustomError(404, "Post not found..!");
    }
    console.log(result);
    res.send(result);
  })
);

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
router.post("/", postValidation, async (req, res) => {
  let postData = new Post(req.body);
  await postData
    .save()
    .then(() => res.send(`ADDED, ${req.body.title}`))
    .catch((err) => res.status(500).send(err));
});
router.put("/:id", postValidation, async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedTitle = await Post.findByIdAndUpdate(id, newData);
    if (updatedTitle) {
      res.send(`Data Updated`);
    } else {
      res.status(404).send("Title not found");
    }
  } catch {
    res.status(500).send("Internal error occured");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let titleDelete = await Post.findByIdAndDelete(id);
    console.log("titleDelete: ", titleDelete);
    if (titleDelete.deletedCount == 0) {
      res.status(404).send(`Title not found`);
    } else {
      res.send(`Deleted ${req.body.title} succesfully`);
    }
  } catch {
    res.status(500).send("Internal error occured");
  }
});

userRouter.get("/", async (req, res) => {
  let resData;
  await User.find().then((data) => {
    resData = data;
  });
  res.send(resData);
});

userRouter.post(
  "/",
  wrapAsync(async (req, res) => {
    console.log(req.body)
    let postData = new User(req.body);
    await postData.save();
    res.send("Added");
  })
);
userRouter.post(
  "/login",
  wrapAsync(async (req, res) => {
    let { username, password } = req.body;
    let result = await User.find({ userName: username });
    if (result.length == 0) {
      throw new CustomError(404, "User not found!");
    } else {
      let savedPassword = result[0].password;
      if (savedPassword != password) {
        throw new CustomError(401, "Wrong Password");
      } else {
        res.send("LOGGED IN");
      }
    }
  })
);

router.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured..!" } = err;
  res.status(status).send(message);
});

module.exports = { router, userRouter };
