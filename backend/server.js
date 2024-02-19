const express = require("express");
const main = require("./init");
const router = require("./routes");
const app = express();
const cors = require("cors");
let databaseConnected = false;
main()
  .then(() => {
    console.log("Database Connected");
    databaseConnected = true;
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use("/post", router);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("server is running");
});
