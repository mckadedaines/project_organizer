const mongoDB = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllTasks = async (req, res, next) => {
    const result = await mongoDB
        .getDb()
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
        const result = await mongoDB.getDb().collection('tasks').find({_id: userId});
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
        id: req.body.id,
        title: req.body.title,
        status: req.body.status,
        dueDate: req.body.dueDate,
        category: req.body.category,
        frequency: req.body.frequency
    };
    const response = await mongoDB.getDb().collection('tasks').insertOne(task);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the task');
    }
};

// Update a 'task'
const updateTask = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid task id to update a task.');
    }
    const taskId = new ObjectId(req.params.id);
    const task = {
        id: req.body.id,
        title: req.body.title,
        status: req.body.status,
        dueDate: req.body.dueDate,
        category: req.body.category,
        frequency: req.body.frequency
    };
    const response = await mongoDB
        .getDb()
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
    const response = await mongoDB
        .getDb()
        .collection('tasks')
        .deleteOne({_id: taskId}, true);
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
