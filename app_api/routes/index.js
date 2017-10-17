const express = require('express');
const router = express.Router();
const workout = require('../controllers/workout');
const exercise = require('../controllers/exercise');
const user = require('../controllers/user');
var ctrlAuth = require('../controllers/authentication');

var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});


router.get('/', user.ShowAllUser );
router.post('/user/CreateUser', user.CreateUser);
router.get('/user/:userId/workout', workout.ShowAll);
router.post('/user/:userId/workout/CreateWorkout', workout.CreateWorkout);
router.get('/user/:userId/workout/:workoutId/exercise',exercise.GetByWorkoutId);
router.post('/user/:userId/workout/:workoutId/exercise/CreateExercise',auth, exercise.CreateExercise);
//router.post('/workout/:workoutId/exercise/:exeId/remove', exercise.remove);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
