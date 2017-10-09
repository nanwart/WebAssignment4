const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

module.exports.CreateWorkout = function (req,res) {
    Workout.create({
            name: req.body.WName,
            description: req.body.WDescription },
        (err, workout) => {
            if (err){
                res.render('error');
            } else {
                Workout.find({},
                    (err, workout) => {
                        if (err) {
                            sendJsonResponse(res,404,{"error": "workout not found"});
                        }
                        else {
                            sendJsonResponse(res,200,Workout);
                        }
                    });
            }
        });
};

module.exports.ShowAll = function (req,res) {
    Workout.find({})
        .exec((err, workout) => {
            if(err){
                res.render('error');
            }
            else {
                sendJsonResponse(res, 200, workout);
            }
        });
};

// virker ikke endnu...
module.exports.remove= function(req, res){
    Workout.findByIdAndRemove(
        req.params.id,
        (err, workout) => {
            res.redirect('workout');
        });
};

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}