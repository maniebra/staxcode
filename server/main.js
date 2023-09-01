// npm installed/node packages
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// self created packages
const { User } = require("./models/user");
const { log } = require("util");

// app
const app = express();
const port = 8080;

// server data
loggedInUsers = [""];

// cookies

// app usages
app.use("/css", express.static(__dirname + "./../client/css/"));
app.use("/html", express.static(__dirname + "./../client/html/"));
app.use("/js", express.static(__dirname + "./../client/js/"));
app.use("/img", express.static(__dirname + "./../client/img/"));
app.use("/fonts", express.static(__dirname + "./../client/fonts/"));
app.use("/icons", express.static(__dirname + "./../client/icons/"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "html", "index.html"));
});

app.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "html", "courses.html"));
});

app.post("/register", (req, res) => {
  let username = req.body["register-username"];
  let email = req.body["register-email"];
  let password = req.body["register-password"];
  let fullname = req.body["register-fullname"];
  let user = new User(username, password, fullname, email);
  console.log(user.toServerJSON);
  res.redirect("/?popup=registersuccess");
});

app.get("/dashboard", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
