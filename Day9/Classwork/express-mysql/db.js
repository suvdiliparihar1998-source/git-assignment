const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Update with your MySQL password
  database: "auth_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

function insertUser(username, email, passwordHash) {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
    connection.execute(
      query,
      [username, email, passwordHash],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      },
    );
  });
}

function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    connection.execute(query, [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]); // Return the first user or undefined
      }
    });
  });
}

module.exports = {
  insertUser,
  getUserByEmail,
};
