var db = require("../models");

module.exports = function(app) {

    //To pull the workout page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {res.status(400).json(err)});
    });

    //To pull the range page
    app.get("/api/workouts/range", ({}, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {res.status(400).json(err)});
    });

    //To submit workouts
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {res.status(400).json(err)});
    });

    //To update the excersise list
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {res.status(400).json(err)});
    });
};