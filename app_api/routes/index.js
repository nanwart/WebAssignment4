var express = require('express');
var router = express.Router();
var addfitness = require('../controllers/addfitness');
var id = 1;
// addFitness routes
router.get('/addfitness', addfitness.GetFitness)
    .post('/addfitness', addfitness.fitnessApp)
    .get('/addfitness/' + id, addfitness.GetOneFitness)
    .put('/addfitness/' + id, addfitness.EditFitness)
    .delete('/addfitness/' + id, addfitness.DeleteFitness);

module.exports = router;