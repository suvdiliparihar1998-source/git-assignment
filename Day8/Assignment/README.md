# Express.js Users API with MySQL

This is a REST API for user management built with Express.js and MySQL.

## Setup

1. Install MySQL:
   - Download and install MySQL from https://dev.mysql.com/downloads/mysql/
   - Or use XAMPP/WAMP which includes MySQL

2. Create database:
   - Open MySQL command line as administrator:
     ```
     mysql -u root -p
     ```
     (Enter your MySQL root password)
   - Run the SQL commands:

     ```sql
     CREATE DATABASE IF NOT EXISTS express_db;
     USE express_db;
     CREATE TABLE IF NOT EXISTS users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(50) NOT NULL,
       last_name VARCHAR(50) NOT NULL,
       email VARCHAR(100) NOT NULL UNIQUE,
       phone VARCHAR(15) NOT NULL
     );
     ```

     Or run the schema file:

     ```
     mysql -u root -p < database/schema.sql
     ```

   - If you prefer no password for root (not recommended for production), you can create a user:
     ```
     CREATE USER 'appuser'@'localhost' IDENTIFIED BY '';
     GRANT ALL PRIVILEGES ON express_db.* TO 'appuser'@'localhost';
     FLUSH PRIVILEGES;
     ```
     Then update `.env`:
     ```
     DB_USER=appuser
     DB_PASSWORD=
     ```

3. Install dependencies:

   ```
   npm install
   ```

4. Configure environment variables:
   - Edit `.env` file with your MySQL credentials:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_mysql_password
     DB_NAME=express_db
     PORT=3000
     ```

5. Start the server:
   ```
   npm start
   ```

The server will run on http://localhost:3000

## API Endpoints

### GET /users

Fetch all users from the database.

**Response:**

```json
[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890"
  }
]
```

### POST /users

Add a new user to the database.

**Request Body:**

```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "0987654321"
}
```

**Response:**

```json
{
  "id": 2,
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "0987654321"
}
```

## Project Structure

- `index.js` - Main application file
- `routes/users.js` - User routes
- `database/config.js` - Database configuration
- `database/schema.sql` - Database schema
- `middleware/logger.js` - Request logging middleware
- `middleware/validation.js` - User input validation middleware
