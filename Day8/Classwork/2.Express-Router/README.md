# Express Router Classwork Solution

This is a simple Express.js application demonstrating the use of routers for organizing routes.

## Installation

1. Install dependencies:
   ```
   npm install
   ```

## Running the Application

1. Start the server:

   ```
   npm start
   ```

   Or for development with auto-restart:

   ```
   npm run dev
   ```

2. The server will run on http://localhost:3001

## API Endpoints

### Users

- GET /users - Get all users
- GET /users/:id - Get user by ID
- POST /users - Create a new user (body: {name, email})
- PUT /users/:id - Update user (body: {name, email})
- DELETE /users/:id - Delete user

### Products

- GET /products - Get all products
- GET /products/:id - Get product by ID
- POST /products - Create a new product (body: {name, price})
- PUT /products/:id - Update product (body: {name, price})
- DELETE /products/:id - Delete product

## Testing

You can test the endpoints using tools like Postman or curl.

Example:

```
curl http://localhost:3001/users
```
