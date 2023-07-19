const mongoDB = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllUsers = async (req, res, next) => {
  try {
    const result = await mongoDB.getDb().collection("users").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    console.log(error);
  }
};

// Get a single 'user' data
const getSingleUser = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongoDB
      .getDb()
      .collection("users")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    console.log(error);
  }
};

// Create a new 'user'
const createUser = async (req, res) => {
  const user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const response = await mongoDB.getDb().collection("users").insertOne(user);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "Some error occured while creating the user");
  }
};

// Update a 'user'
const updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid user id to update a user.");
  }
  const userId = new ObjectId(req.params.id);
  const user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const response = await mongoDB
    .getDb()
    .collection("users")
    .replaceOne({ _id: userId }, user);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occured while updating the user.");
  }
};

// Delete a 'user'
const deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid user id to delete a user.");
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongoDB
    .getDb()
    .collection("users")
    .deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while deleting the user.");
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
