const express = require("express");
const routes = express.Router();

const usersController = require("../controllers/usersController.js");

const validation = require('../middleware/validate.js')

// Retrieve all published Users
routes.get('/', usersController.getAllUsers);

// Retrieve a single User with id
routes.get('/:id', usersController.getSingleUser);

// Create a new User
routes.post('/', validation.saveUser, usersController.createUser);

// Update a User with id
routes.put('/:id', validation.saveUser, usersController.updateUser);

// Delete a User with id
routes.delete('/:id', usersController.deleteUser);


module.exports = routes;
