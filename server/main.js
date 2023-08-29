const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use("/css", express.static(__dirname + "./../client/css/"));
app.use("/html", express.static(__dirname + "./../client/html/"));
app.use("/js", express.static(__dirname + "./../client/js/"));
app.use("/img", express.static(__dirname + "./../client/img/"));
app.use("/fonts", express.static(__dirname + "./../client/fonts/"));
app.use("/icons", express.static(__dirname + "./../client/icons/"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "html", "index.html"));
});

app.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "html", "courses.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
