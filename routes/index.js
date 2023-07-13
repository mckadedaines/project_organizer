const express = require("express");
const routes = express.Router();

routes.use('/', require('./swagger'));

routes.use('/tasks', require('./tasks.js'));

routes.use('/users', require('./user.js'));

module.exports = routes;
