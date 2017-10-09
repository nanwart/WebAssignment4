const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Exercise = mongoose.model('exercise');


module.exports.CreateExercise = function(req, res) {
    Exercise.create(
        {
                exercise: req.body.Exercise,
                description: req.body.Description,
                sets: req.body.Sets,
                repstime: req.body.Repstime
        },
        (err, exer) => {
            Workout.findByIdAndUpdate(
                req.params.workoutId,
                {$push: {exercise: exer}},
                {new: true},
                (err, Workout) => {
                    if (err) {
                        res.render('error');
                    }
                    else {
                        res.redirect('/workout/' +req.params.workoutId + '/exercise/');
                    }
                });
    });
};

module.exports.GetByWorkoutId = function(req, res) {
    Workout.findById(req.params.workoutId)
        .populate('exercise')
        .exec((err, Workout)=> {
        if (err){
            res.render('error');
        } else {
            res.render('exercise', {title: 'Exercise', exercise: Workout.exercise, workoutId: req.params.workoutId});
        }
        });
};

module.exports.remove = function (req, res) {
    Exercise.findByIdAndRemove(req,params.exeId)
        .exec(
        (err, exercise) => {
            if (err){
                res.render('error');
            } else {
                res.redirect('/workout/' + req.params.workoutId + '/exercise/');
            }
        });
};
