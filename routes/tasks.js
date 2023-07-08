const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getUserTasks);

router.post('/', tasksController.createUserTask);

module.exports = router;
