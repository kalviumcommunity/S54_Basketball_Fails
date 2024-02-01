const express = require("express");
const main = require("./init");

const app = express();

app.get("/", (req, res) => {
  main()
    .then(() => {
      console.log("Database Connected");
      res.send("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("server is running");
});
