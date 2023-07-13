const express = require("express");
const routes = express.Router();

const usersController = require("../controllers/usersController.js");

// Retrieve all published Users
routes.get('/users', usersController.getAllUsers);

// Retrieve a single User with id
routes.get('/users/:id', usersController.getSingleUser);

// Create a new User
routes.post('/users', usersController.createUser);

// Update a User with id
routes.put('/users/:id', usersController.updateUser);

// Delete a User with id
routes.delete('/users/:id', usersController.deleteUser);


module.exports = routes;
