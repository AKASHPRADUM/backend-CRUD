import TaskModel from "../models/TaskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" });
  }
};

export const saveTask = async (req, res) => {
  const task = new TaskModel(req.body);
  try {
    const savedata = await task.save();
    res.status(200).json(savedata);
  } catch (err) {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" });
  }
};

export const updateTask = async (req, res) => {

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted successfully.");
  } catch (err) {
    console.log(err);
    res.send({ error: err, msg: "Something went wrong!" });
  }
};
