const express = require("express");
const routes = express.Router();

const tasksController = require("../controllers/tasksController");

// Retrieve all published Tasks
routes.get('/tasks', tasksController.getAllTasks);

// Retrieve a single Task with id
routes.get('/tasks/:id', tasksController.getSingleTask);

// Create a new Task
routes.post('/tasks', tasksController.createTask);

// Update a Task with id
routes.put('/tasks/:id', tasksController.updateTask);

// Delete a Task with id
routes.delete('/tasks/:id', tasksController.deleteTask);

module.exports = routes;
