var express = require('express');
var router = express.Router();
const controller = require('../controllers/trips')
const authController = require('../controllers/authentication');
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

router
  .route('/login')
  .post(authController.login);
  
router
  .route('/register')
  .post(authController.register);

router
  .route('/trips')
  .get(controller.tripsList) // changed tripsController to controller (for this and the ones below)
  .post(auth,controller.tripsAddTrip)
  

router
  .route('/trips/:tripCode')
  .get(controller.tripsFindCode)
  .put(auth, controller.tripsUpdateTrip);
  

router.get('/', controller.tripsList);
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
