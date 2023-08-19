const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id. No such workout." });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  let invalidFields = [];

  if (!title) invalidFields.push("title");
  if (!load || load > 1000) invalidFields.push("load");
  if (!reps || reps > 1000) invalidFields.push("reps");
  if (invalidFields.length > 0)
    return res.status(400).json({
      error: "Please fill all fields with valid value.",
      invalidFields,
    });

  try {
    const workout = await Workout.create({ title, reps, load });
    // res.status(200).json({ msg: "Simpan workout baru berhasil." });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ msg: "Create a New Workouts " });
};

// delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id. No such workout." });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  // res.status(200).json({ msg: "Delete success." });
  res.status(200).json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id. No such workout." });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }
  res.status(200).json({ msg: "Update success." });
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
