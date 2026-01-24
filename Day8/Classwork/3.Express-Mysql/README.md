# Express MySQL App

A simple Express.js application integrated with MySQL database.

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Set up MySQL database:
   - Create a database named `express_mysql_db`
   - Create a table `users`:
     ```sql
     CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL
     );
     ```

3. Update `.env` file with your MySQL credentials.

4. Run the application:
   ```
   npm start
   ```
   or for development:
   ```
   npm run dev
   ```

## API Endpoints

- GET / : Welcome message
- GET /users : Get all users
- POST /users : Add a new user (body: {name, email})
