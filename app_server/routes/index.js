var express = require('express');
var router = express.Router();
var addfitnes = require('../controllers/addfitness');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fitness App Alexander, Martin og Nanna' });
});


router
    .route('/addfitness')
    .post(addfitnes.fitnessApp)
    .get(addfitnes.Getfitness);
///* GET homepage. */
//router.get('/', homepageController);

module.exports = router;
