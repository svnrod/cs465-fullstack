var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel')

router.get('/', controller.travel);
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
