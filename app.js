const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
app.get("/", (req, res) => {
  res.send("Working Properly");
  console.log(req.url, req.method);
});
