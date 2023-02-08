const express = require("express");
const morgan = require('morgan');
const app = express();
app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
app
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
  console.log(req.url, req.method);
});
