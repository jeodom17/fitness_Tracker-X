const router = require("express").Router();
const { Workout } = require("../../models");
const db = require("../../models");

//* match fetch calls in api.js

router.get("/", (req, res) => {
    let workouts = await db.Workout.aggregate( [
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.totalDuration" } ,
          }
        },
        
     ] ).sort();
     res.send(workouts);
})


router.get("/range", (req, res) => {

})


router.post("/", async (req, res) => {
    db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put("/:id", async (req, res) => {
        if (req.body.name != "") {
          const addWorkout = await db.Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body },
          });
          res.json(addWorkout);
        } else {
          return;
        }
      });
module.exports = router;