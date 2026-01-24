const express = require("express");
const router = express.Router();
const db = require("../database/config");
const validateUser = require("../middleware/validation");

// GET /users - Fetch all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
});

// POST /users - Add new user
router.post("/", validateUser, (req, res) => {
  const { first_name, last_name, email, phone } = req.body;

  db.query(
    "INSERT INTO users (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)",
    [first_name, last_name, email, phone],
    (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ error: "Email already exists" });
        }
        return res.status(500).json({ error: "Internal server error" });
      }
      res.status(201).json({
        id: result.insertId,
        first_name,
        last_name,
        email,
        phone,
      });
    },
  );
});

module.exports = router;
