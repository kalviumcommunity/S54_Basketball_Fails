const express = require("express");
const main = require("./init");

const app = express();

let databaseConnected = false
main()
    .then(() => {
      console.log("Database Connected");
      databaseConnected = true
    })
    .catch((err) => {
      console.log(err);
    });

app.get("/", (req, res) => {
  res.send("Home page")
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("server is running");
});
