const mongoDB = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

exports.getUser = (req, res) => {
  const userId = req.params.userId;
};

exports.createUser = (req, res) => {
  const userId = req.params.userId;
  const taskData = req.body;
};
