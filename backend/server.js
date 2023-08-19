require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

const app = express();

app.use(express.json());

//simple middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// simple routing
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to MERN App!!" });
// });

// routing from another routes file
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connect to DB and listen on port ", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });

// simple aktivate server
// app.listen(process.env.PORT, () => {
//   console.log("Listen pada port ", process.env.PORT);
// });

// fJAimuxnVN6ypOUQ
// iinsholihin
