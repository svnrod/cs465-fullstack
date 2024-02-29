var express = require('express');
var router = express.Router();
const controller = require('../controllers/trips')

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindCode)
  .put(tripsController.tripsUpdateTrip);

router.get('/', controller.tripsList);
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
