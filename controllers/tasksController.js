const mongoDB = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllTasks = async (req, res, next) => {
  const result = await mongoDB
    .getDb()
    .db("team_proj")
    .collection("tasks")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

// Get a single 'task' data
const getSingleTask = async (req, res, next) => {
  try {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db().collection('tasks').find({_id: userId});
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      });
  } catch (error) {
      console.log(error);
  }

};

// Create a new 'Task'
const createTask = async (req, res) => {
const task = {
  taskId: req.body.taskId,
  name: req.body.name,
  genre: req.body.genre,
  console: req.body.console,
};
const response = await mongodb.getDb().db().collection('tasks').insertOne(task);
if (response.acknowledged) {
  res.status(201).json(response);
} else {
  res.status(500).json(response.error || 'Some error occured while creating the task');
}
};

// Update a 'task'
const updateTask = async (req, res) => {
if (!ObjectId.isValid(req.params.id)) {
  res.status(400).json('Must use a valid task id to update a task.');
}
const taskId = new ObjectId(req.params.id);
const task = {
  taskId: req.body.taskId,
  name: req.body.name,
  genre: req.body.genre,
  console: req.body.console,
};
const response = await mongodb
  .getDb()
  .db()
  .collection('tasks')
  .replaceOne({_id: taskId}, task);
console.log(response);
if (response.modifiedCount > 0) {
  res.status(204).send();
} else {
  res.status(500).json(response.error || "Some error occured while updating the task.");
}
};

// Delete a 'task'
const deleteTask = async (req, res) => {
if (!ObjectId.isValid(req.params.id)) {
  res.status(400).json('Must use a valid task id to delete a task.');
}
const taskId = new ObjectId(req.params.id);
const response = await mongodb
  .getDb()
  .db()
  .collection('tasks')
  .deleteOne({ _id: taskId }, true);
console.log(response);
if (response.deletedCount > 0) {
res.status(204).send();
} else {
res.status(500).json(response.error || 'Some error occurred while deleting the task.');
}
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask
};
