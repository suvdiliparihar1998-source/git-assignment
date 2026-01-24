// 1.Importing mysql2
const mysql = require(`mysql2`);

// 2. Create pool connection
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "internship_db",
});

// 3. Exporting module
module.exports = pool;
