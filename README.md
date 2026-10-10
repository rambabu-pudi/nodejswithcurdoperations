# Node Mongo API

A simple Express.js API connected to MongoDB using Mongoose. This project provides basic user management endpoints and follows a classic MVC-style folder structure.

## Project Structure

```text
node-mongo-api/
├── controllers/
│   └── userController.js        # Handles HTTP logic for user-related requests
├── models/
│   └── User.js                  # Mongoose schema and User model
├── routes/
│   └── userRoutes.js            # API route definitions for users
├── node_modules/                # Installed dependencies
├── .env                         # Environment variables (not committed in some setups)
├── package.json                 # Project metadata and scripts
├── package-lock.json            # Lock file for npm dependencies
├── server.js                   # App initialization and MongoDB connection
└── README.md                   # Project documentation
```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Main Files

### `server.js`
Starts the Express app, loads environment variables, connects to MongoDB, and mounts the user routes.

### `routes/userRoutes.js`
Defines API endpoints:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `POST /api/users` - Create a new user

### `controllers/userController.js`
Contains the controller functions for retrieving, creating, and handling user requests.

### `models/User.js`
Defines the `User` schema with the following fields:

- `name` (required)
- `email` (required, unique)
- `age` (optional)
- timestamps enabled automatically

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your MongoDB connection string and server port:

```env
MONGO_URI=mongodb://localhost:27017/node-mongo-api
PORT=5000
```

3. Start the development server:

```bash
npm run dev
```

or:

```bash
npm start
```

## Example API Usage

### Create a user

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rambabu Pudi",
    "email": "rambabu@example.com",
    "age": 40
  }'
```

### Get all users

```bash
curl http://localhost:5000/api/users
```

### Get user by ID

```bash
curl http://localhost:5000/api/users/:id
```

## Notes

This project is a lightweight backend example intended for learning and quick API prototyping with MongoDB and Express.
