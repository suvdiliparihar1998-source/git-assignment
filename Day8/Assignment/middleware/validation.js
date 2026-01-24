const validateUser = (req, res, next) => {
  const { first_name, last_name, email, phone } = req.body;

  if (!first_name || !last_name || !email || !phone) {
    return res
      .status(400)
      .json({
        error: "All fields (first_name, last_name, email, phone) are required",
      });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Basic phone validation (assuming 10-15 digits)
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  next();
};

module.exports = validateUser;
