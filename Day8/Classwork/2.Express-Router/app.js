const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routers
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");

// Use routers
app.use("/users", userRouter);
app.use("/products", productRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Express Router Classwork!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
