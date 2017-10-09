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
                      res.render('error');
                  }
                  else {
                      res.render('workout', {title: 'workout', workout: workout});
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
            res.render('workout', {title: 'workout', workout: workout});
        }
        });
};


module.exports.remove= function(req, res){
    Workout.findByIdAndRemove(
        req.params.id,
        (err, workout) => {
            res.redirect('workout');
        });
};
