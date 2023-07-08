const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/userController");

router.get("/", tasksController.getUser);

router.post("/", tasksController.createUser);

module.exports = router;
