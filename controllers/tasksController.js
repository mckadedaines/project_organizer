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

module.exports = {
  getAllTasks,
};
