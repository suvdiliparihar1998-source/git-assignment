
const express = require("express");
const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
