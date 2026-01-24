require("dotenv").config();

const express = require("express");
const app = express();

// Import routes
const userRoutes = require("./routes/users");

// Import middleware
const logger = require("./middleware/logger");

// Middleware
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(logger); // Custom logger middleware

// Routes
app.use("/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
