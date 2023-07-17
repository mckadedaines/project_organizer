const express = require("express");
const routes = express.Router();

const tasksController = require("../controllers/tasksController");

const validation = require('../middleware/validate');

// Retrieve all published Tasks
routes.get('/', tasksController.getAllTasks);

// Retrieve a single Task with id
routes.get('/:id', tasksController.getSingleTask);

// Create a new Task
routes.post('/', validation.saveTask, tasksController.createTask);

// Update a Task with id
routes.put('/:id', validation.saveTask, tasksController.updateTask);

// Delete a Task with id
routes.delete('/:id', tasksController.deleteTask);

module.exports = routes;
