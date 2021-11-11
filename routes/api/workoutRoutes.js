const router = require("express").Router();
const { Workout } = require("../../models");
const db = require("../../models");

//* match fetch calls in api.js

router.get("/api/workouts", (req, res) => {
    
})



router.post("/", async (req, res) => {
    Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
